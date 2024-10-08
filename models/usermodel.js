import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
 name : String,
 email : {
   type : String,
   unique : true,
   required : true
 },
 phone:Number,
 roll:String,
 password : String, 
 profilePic : Object,
 currentAddress:String,
 deleverAddress:String,
 block:String,
 city:String,
 state:String,
 country:String,
},{ 
  timestamps : true
})

const userModel = mongoose.model('user',userSchema)

export default userModel