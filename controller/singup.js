import userModel from '../models/usermodel.js'
import bcrypt from 'bcryptjs'
const userSinigupController = async (req,res)=>{
  try{
    
    const {email,password,name,profilePic} = req.body
     
   if(email == '' || name == '' || password == ''){
    res.status(200).json({
      message:"please provide allfields",
      success:false
    })
    return false
    } 
     
    const allrady_user = await userModel.findOne({email})
    if(allrady_user){
      res.status(200).json({
        message:"You are allready singup this site",
        success:false
      })
      return false
    }
    
   
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password,salt)
  
    
    const userData = new userModel({
      name,
      email,
      password:hashPassword,
      profilePic,
    })
    
  await userData.save()
  res.status(200).json({
    data:userData,
    message:"User Created SuccessFull",
    success:true
  })
    
    
  }catch(error){
    res.json({message:error.message,success:false})
  }
}
export default userSinigupController

