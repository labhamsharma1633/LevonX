import { User } from "../models/User.model.js"

export const getCurrentUser=async(req,res)=>{
    try{
        const user=await User.findById(req.user.id);
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        res.status(200).json({
            message:"User found",
            user
        })


    }
    catch(error){
        res.status(500).json({
            message:"Internal server error"
        })
    }
}
export const getAllUsers=async(req,res)=>{
    try{
        const users=(await User.find()).sort({createdAt:-1});
        if(!users){
            return res.status(404).json({
                message:"No users found"
            })

        }
        res.status(200).json({
            message:"Users found",
            users
        })

    }
    catch(error){
        res.status(500).json({
            message:`Failed to get users: ${error}`
        })
    }
}