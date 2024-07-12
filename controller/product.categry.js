import categryModel from '../models/category.model.js'
const productCategry = async (req,res)=>{
  const {categry} = req.body;
  if(categry == ""){
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
      message:"categry allredy found"
    })
    
    return false
  }
  
  const allCategry = new categryModel({categry})
  
  await allCategry.save()
  res.json({
    success:true,
    message:"categry added",
    data:allCategry
  })
  
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
