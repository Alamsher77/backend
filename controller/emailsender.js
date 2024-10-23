import nodemailer from 'nodemailer'
import crypto from 'crypto'
import userModel from '../models/usermodel.js'
import otpmodel from '../models/otp.js'

const emailsender = async(req,res)=>{
 try {
  
  const {email} = req.body
  
  const finduser = await userModel.findOne({email})
  
  if(!finduser){
     res.json({
    success:false,
    message:"email ID not register on this website"
  })
  return false
  }
   
  const transporter = nodemailer.createTransport({
  service:'gmail',
  port: 465,
  secure: true,
  auth: {
    user: 'easyshope8252@gmail.com',
    pass: 'laivakkxobcsowgu',
  },
});

// Generate OTP
function generateOTP() {
  return crypto.randomInt(100000, 999999).toString();
}

const otp = generateOTP()

 const mailOptions = {
    from:"easyshope8252@gmail.com",
    to: email,
    subject: 'Forgote password verification code',
    text:` Your verification code 👉👉 ${otp} 👈👈 don't share this code`,
  };

 
  transporter.sendMail(mailOptions, async (error, info) => {
    if (error) {
      return res.status(500).json({success:false, message: 'Failed to send OTP', error });
    } else {
      res.status(200).json({success:true,info,message: 'OTP sent successfully' });
      const otpresult = new otpmodel({email,otp})
 
       await otpresult.save()
    }
  }); 
 
 
 } catch (e) {
    res.json({
    success:false,
    message:e.message
  })
 }
}
export default  emailsender