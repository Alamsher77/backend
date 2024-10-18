 import mongoose from 'mongoose'
 
 const Schema = new mongoose.Schema({
   name:{type:String,require:true},
   icon:{type:Object,require:true}
 })
 
 const changeAppNameAndIconModel =  mongoose.model('appiconandname',Schema)
export const changeAppNameAndIcon = async (req,res)=>{
 try {
    const {name,icon} = req.body
  if(!name || !icon){
    res.json({
      success:false,
      message:'please add a name of app'
    })
    return false
  }
 
 const availabledata = await changeAppNameAndIconModel.findOne()
 if(availabledata){
   res.json({
     success:false,
     message:'You Have alrady add the name of app',
   })
   return false
 }
 
 const newappnamedata = new changeAppNameAndIconModel({
   name,
   icon
 })
 
  await newappnamedata.save()
  res.json({
    success:true,
    message:'Name Saved Successfull'
  })
 } catch (e) {
   res.json({
     success:false,
     message:e.message
   })
 }
}

 export const updateAppNameAndIcon = async (req,res)=>{
   try {
  
     await changeAppNameAndIconModel.findByIdAndUpdate(req.body._id,req.body)
   res.json({
     success:true,
     message:'App Name And Icon Updated Successfull'
   })
    
   } catch (e) {
     res.json({
       success:false,
       message:e.message
     })
   }
 }
 
 export const getappnameandicon = async (req,res)=>{
   
    const getappiconandata = await changeAppNameAndIconModel.find()
    
    res.json(getappiconandata)
 }