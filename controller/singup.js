import userModel from '../models/usermodel.js'
import bcrypt from 'bcryptjs'
const userSinigupController = async (req,res)=>{
  try{
    
    const {email,phone,password,name,conformpassword} = req.body
 
    const allrady_user = await userModel.findOne({email})
    if(allrady_user){
      res.status(200).json({
        message:"your email alrady resister please try another email",
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
    
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password,salt)
  
    
    const userData = new userModel({
      name,
      email,
      password:hashPassword,
      phone,
    })
    
  await userData.save()
  res.status(200).json({
    data:userData,
    message:"User resister SuccessFull",
    success:true
  })
    
    
  }catch(error){
    res.json({message:error.message,success:false})
  }
}
export default userSinigupController

