import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        reqired:true,
    },
    email:{
        type:String,
        reqired:true,
        unique:true,
    },
    phone:{
         type:String,
        reqired:true,
    },
    password:{
         type:String,
        reqired:true,
    }
},
{timestamps:true}
);


const user=mongoose.model("user",userSchema);

export default user;