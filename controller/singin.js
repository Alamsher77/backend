import userModel from '../models/usermodel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSingInController = async (req,res)=>{
  try{
    const {email,password,conformpassword} = req.body 
    
    const users = await userModel.findOne({email})
   
    if(!users){
      res.status(200).json({
        message:"email or password is wrong",
        success:false
      })
      
      return false
    }
     
    if(password != conformpassword){
       res.status(200).json({
       message:"password and conformpassword don't match",
       success:false
        
      })
      return false
    }
 const compearPassword = bcrypt.compareSync(password,users.password)
  if(!compearPassword){
      res.status(200).json({
       message:"email or password is wong",
       success:false
        
      })
      return false
    }
    
    const filtterUsers = {
      id:users._id,
      name:users.name,
      email:users.email,
      profilePic:users.profilePic
    }
   
 
 const token = await  jwt.sign(filtterUsers,process.env.secrate_key, { expiresIn: '10d' });
 
  res.cookie('token', token, {
    maxAge: 864000000,
    secure: true,
    httpOnly: true,
    sameSite:"None"
  });
 

  res.json({
    message:"Login successfully",
    success:true,
    user:users
  })
  

  }catch(error){
    res.json({
      success:false,
      message:error.message
    })
   
  }
}
export default userSingInController
