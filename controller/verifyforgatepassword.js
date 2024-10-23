import otpmodel from '../models/otp.js'
import userModel from '../models/usermodel.js'
import bcrypt from 'bcryptjs'
const verifyforgatepassword = async(req,res)=>{
 try {
    const {reciveotp,email} = req.body
    if(reciveotp.length < 6){
      res.json({
        success:false,
        message:'please enter otp'
      })
      return false
    }
    const findotp = await otpmodel.findOne({otp:reciveotp,email}) 
    if(!findotp){
      res.json({
        success:false,
        message:'please enter valide otp'
      })
      return false
    } 
    await otpmodel.deleteOne({_id:findotp._id})
    
    res.json({
    success:true,
    message:'verification success'
  })
 } catch (e) {
   res.json({
     success:false,
     message:e.message
   })
 }
}

const changepassword = async(req,res)=>{
  const {newpssword,email} = req.body

 try {
    
 if(newpssword.password != newpssword.conformpassword){
     res.json({
    success:false,
    message:'password and conformpassword don`t match'
  })
  return false
 }
   const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(newpssword.password,salt)
  
 const passwordchange = await userModel.findOneAndUpdate({email},{password:hashPassword})
 if(!passwordchange){
    res.json({
    success:true,
    message:'change password faild'
  })
  return false
 }
  res.json({
    success:true,
    message:'password change successfully'
  })
 } catch (e) {
   res.json({
     success:false,
     message:e.message
   })
 }
}
export  {verifyforgatepassword,changepassword}