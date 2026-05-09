import {User} from "../models/User.model.js"
import Component from "../models/component.model.js"
import path from "path"
import { execSync } from "child_process"
import fs from "fs"
export const saveComponent = async (req, res) => {
  try {
    const { name, code, props } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Admin duplicate check
    if (user.role === "admin") {
      const existing = await Component.findOne({
        name,
        visibility: "public",
      });

      if (existing) {
        return res.status(400).json({
          message: "Component with this name already exists",
        });
      }
    }

    // Normal user duplicate check
    if (user.role !== "admin") {
      const existing = await Component.findOne({
        name,
        owner: req.user._id,
      });

      if (existing) {
        return res.status(400).json({
          message: "Component with this name already exists",
        });
      }
    }

    const component = await Component.create({
      name,
      code,
      props,
      owner: req.user._id,
    });

    return res.status(200).json({
      message: "Component saved successfully",
      component,
    });

  } catch (error) {
    console.log("SAVE ERROR =>", error);

    return res.status(500).json({
      message: "Failed to save component",
      error: error.message,
    });
  }
};


export const publishComponent=async(req,res)=>{
    try{
        const user=await User.findById(req.user._id);
        if(!user || user.role!=="admin"){
            return res.status(403).json({message:"Unauthorized"})

        }
        const {componentId}=req.body;
        const component=await Component.findById(componentId);
        if(!component){
            return res.status(404).json({message:"Component not found"})
        }
        if(component.owner.toString()!==req.user._id.toString()){
            return res.status(403).json({message:"You can only publish your own components"})
        }
        const libPath=path.join(process.cwd(),"../LevonX-lib");
        const componentDir=path.join(
            libPath,
            "src/components",
            component.name
        )
        const componentFile=path.join(
            componentDir,
            `${component.name}.jsx`
        );
        const indexFile=path.join(libPath,"src/index.js");
        //create component directory if not exists
        if(!fs.existsSync(componentDir)){
            fs.mkdirSync(componentDir, {recursive:true})
        }
        //write component code to file
        fs.writeFileSync(componentFile,component.code);
        //read index.js
        let indexContent=fs.readFileSync(indexFile,"utf-8");
        const exportLine=
        `export {${component.name}} from "./components/${component.name}/${component.name}.jsx";`;
        //prevent duplicate exports
        if(!indexContent.includes(exportLine)){
            fs.appendFileSync(indexFile,`\n${exportLine}\n`);
        }
        // clean old Build
        console.log("Cleaning old build...");
        const disPath=path.join(libPath,"dist");
        if(fs.existsSync(disPath)){
            fs.rmSync(disPath,{recursive:true,force:true})
        }
        //build library
        console.log("Building library...");
        execSync("npm run build",{
            cwd:libPath,
            stdio:"inherit"
        });
        //update version
        console.log("Updating version...");
        execSync("npm version patch --no-git-tag-version",{
            cwd:libPath,
            stdio:"inherit"
        });
        //publish to npm
        console.log("Publishing to npm...");
        execSync("npm publish --access public",{
            cwd:libPath,
            stdio:"inherit"
        });

        component.visibility="public";
        component.npmPacKage="levonx-lib";
        await component.save();
        return res.status(200).json({message:"Component published successfully",component}) 


    }
    catch(error){
    console.log("PUBLISH ERROR =>", error);

    return res.status(500).json({
        message:"Failed to publish component",
        error:error.message
    })
}
}
export const getAllComponents=async(req,res)=>{
    try{
        const components=await Component.find().populate("owner","name","email").sort({createdAt:-1});
        if(!components){
            return res.status(404).json({message:"No components found"})
        }
        return res.status(200).json({message:"Components fetched successfully",components})

    }
    catch(error){
        console.log("GET ALL COMPONENTS ERROR =>", error);
        return res.status(500).json({
            message:"Failed to fetch components",
            error:error.message
        })
    }
}
