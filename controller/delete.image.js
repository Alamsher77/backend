import productModel from '../models/product.model.js'
// Get the path of the image to delete
const imageDelete = async (req,res)=>{
 try{
    await productModel.findOneAndDelete({_id:req.body._id})
  res.json({
    success:true,
    message:'product deleted successfully'
  })
 }catch(error){
   console.log(error)
 }
  
}
export default imageDelete