import productModel from '../models/product.model.js'
// Get the path of the image to delete
const imageDelete = async (req,res)=>{
 try{
  const result = await productModel.findOneAndDelete({_id:req.body._id})
  if(!result){
    res.json({
    success:false,
    message:'product deleted faild'
  })
  }
  res.json({
    success:true,
    message:'product deleted successfully'
  })
 }catch(error){
  res.json({
    success:false,
    message:error.message
  })
 }
  
}
export default imageDelete