import userModel from '../models/usermodel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSingInController = async (req,res)=>{
  try{
    const {email,password} = req.body
    if(email == '' || password == ''){
       res.status(200).json({message:'please provide allfields',
        success:false
      })
      return false
    }
    const users = await userModel.findOne({email})
   
    if(!users){
      res.status(200).json({message:"please check your email or password",
        success:false
      })
      
      return false
    }
 const compearPassword = bcrypt.compareSync(password,users.password)
  if(!compearPassword){
      res.status(200).json({
       message:"please check your email or password",
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
   
 
    const token = await  jwt.sign(filtterUsers,"ahsdjehorwejdhfowrwerijlksfjasf", { expiresIn: '30d' });

 
  
  res.cookie('token', token, {
    maxAge: 2592000000,
    httpsOnly: true,
    secure: true,
    domain:"http://localhost:5173",
    path:"http://localhost:5173/signup"
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
