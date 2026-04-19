
import Jwt from "jsonwebtoken";
const isAuth=async(req,res,next)=>{
    try{
        let {token}=req.cookies;
        if(!token){
            return res.status(401).json({
                message:"Unauthorized"
            })
        }
        const verifyToken=await Jwt.verify(token,process.env.JWT_SECRET);
        if(!verifyToken){
            return res.status(401).json({
                message:"Unauthorized"
            })
        }
        req.user=verifyToken;
        next();


    }
    catch(error){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}   
    
export default isAuth;