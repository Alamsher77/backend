import categryModel from '../models/category.model.js'
const productCategry = async (req,res)=>{
 try{
    const {categry,catelogo} = req.body; 
  if(!categry || !catelogo ){
    res.json({
      success:false,
      message:"please provide all fields"
    })
    return false
  }
  
  const findCategry = await categryModel.findOne({categry})
  if(findCategry){
    res.json({
      success:false,
      message:"categry allredy added"
    })
    
    return false
  }
  
  const allCategry = new categryModel({categry,catelogo})
  
  await allCategry.save()
  res.json({
    success:true,
    message:"categry added",
    data:allCategry
  })
  
 }catch(error){
   res.json({
     success:false,
     message:error?.message
   })
 }
}

const showProductCategry = async (req,res)=>{
   const findAllCategry = await categryModel.find({})
   res.json(findAllCategry) 
}

// remove categry 
const removeCategry = async (req,res)=>{
   await categryModel.findOneAndDelete({_id:req.body._id})
   res.json({
     success:true,
     message:'categry was deleted'
   })
}
export {productCategry, showProductCategry,removeCategry}
