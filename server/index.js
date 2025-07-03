import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import connectDB from "./src/config/db.js";
import { sample } from "./src/middlewares/authmiddleware.js";
import authRouter from "./src/routes/authRouter.js"
const app=express();

app.use(sample)
app.use("/auth",authRouter);


app.get("/",(request,response)=>{
    response.json({message:"Main server hoon"})
})

// let port;
// if(process.env.PORT){
//     port=process.env.PORT;
// }else{
//     port=5000;
// }
const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("server startet at",port);
    connectDB();
})
