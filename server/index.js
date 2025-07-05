import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import connectDB from "./src/config/db.js";
import authRouter from "./src/routes/authRouter.js"
import morgan from "morgan";
const app=express();

app.use(express.json());
app.use(morgan("dev"));

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
app.use((err,req,res,next)=>{
const errorMessage=err.message || "Internal server Error"
const errorCode=err.statusCode || 500
res.status(errorCode).json({message:errorMessage})
})

const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("server startet at",port);
    connectDB();
})
