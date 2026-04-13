import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./configs/connectDB.js";
dotenv.config();
const app=express();
app.get("/",()=>{
    res.json("Hello from Server")
})
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server Started on port ${PORT}`)
    connectDB();
})