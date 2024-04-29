const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

const jwt = require('jsonwebtoken');
async function userSignIn(req,res){
 try{
   const {email,password}=req.body;
   if(!email){
    throw "Email is required";
   }
    if(!password){
     throw "Password is required";
    }
    const user=await UserModel.findOne({email});
    if(!user){
     throw "User not found";
    }
const checkPassword=await bcrypt.compare(password,user.password);
   console.log("checkPassword",checkPassword)
   if(checkPassword){
    const tokenData={
     _id:user._id,
        email:user.email,
    }
   const token=await jwt.sign(tokenData,process.env.TOKEN_SECRET_KEY,{expiresIn:60*60*8});
   const tokenOptions={
    secure:true,
    httpOnly:true
   }
   res.cookie("token",token).json({message:"User Logged In Successfully",success:true,error:false,data:token});
   }else{
    throw "Invalid password";
   }

 }catch(err){
    res.json({message:err,success:false,error:true});
 }
}
module.exports=userSignIn;