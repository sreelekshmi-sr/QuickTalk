const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({   //new used for class
    name:{type:String, required:true,minLlength:3,maxlength:30},
    email:{type:String, required:true,minLlength:3,maxlength:30,unique:true},
    password:{type:String, required:true,minLlength:3,maxlength:1024},
},
    {timestamps:true}

) 

const userModel=mongoose.model("Useru",userSchema) //model to interact with db

module.exports=userModel