import mongoose from 'mongoose'
const schema = new mongoose.Schema({
  email:String,
  otp:String,
  createdAt: { type: Date, expires: '5m', default: Date.now } 
})

const otpmodel = mongoose.model('otp',schema)

export default otpmodel