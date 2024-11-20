import productModel from '../../models/product.model.js'
const updateProduct = async (req,res)=>{
   const {id} = req.params 
    
   const {name,newPrice,oldPrice,image,productInfo,categry} = req.body
  
  if(!name || !newPrice  || !oldPrice || !productInfo  || !image ){
    res.json({
      success:false,
      message:'Updtate Iteams not found ?' 
    })
    return false
  }
   
  const findProduct = await productModel.findByIdAndUpdate(id,req.body)
   
    if(!findProduct){
    res.json({message:'product not found',success:false})
    return false
  }
 res.json({
   message:'Updated successfull',
   success:true
 })
   
   

}
const findByIdProduct = async (req,res)=>{
   const {id} = req.params 
  const findProduct = await productModel.findById(id)
   
    if(!findProduct){
    res.json({message:'product not found',success:false})
    return false
  }
 res.json({message:'Product Fill in inputFilds successfull',success:true,data:findProduct})
   
   

}
export  {updateProduct,findByIdProduct}