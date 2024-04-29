const userModel=require('../models/userModel');
var bcrypt = require('bcryptjs');

async function userSignUp(req,res){
 try{
   const {name,email,password}=req.body;
   
   const user=await userModel.findOne({email})
    if(user){
     throw "User already exists";
    }
    
   if(!email){
    throw "Email is required";
   }
    if(!password){
     throw "Password is required";
    }
    if(!name){
     throw "Name is required";
    }
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    if(!hashedPassword){
     throw "Error in hashing password";
    }
    const payload={
        ...req.body,
     password:hashedPassword
    }
    const userData=new userModel(payload)
    const saveUser=await userData.save();
    res.status(201).json({message:"User Registered Successfully",success:true,error:false});
 }catch(err){
    res.json({message:err,success:false,error:true});
 }
}
module.exports=userSignUp;