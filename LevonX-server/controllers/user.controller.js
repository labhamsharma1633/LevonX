import { User } from "../models/User.model.js"

export const getCurrentUser=async(req,res)=>{
    try{
        const user=await User.findById(req.user.userId);
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