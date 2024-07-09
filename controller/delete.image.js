import fs from 'fs'
import productModel from '../models/product.model.js'
// Get the path of the image to delete
const imageDelete = async (req,res)=>{
   const findUserImage = await productModel.findOne({_id:req.body._id}) 
  
  const findString = 'product'
  const imageString = findUserImage.image.indexOf(findString)
  let responseImage
   if(imageString !== -1){
     responseImage = findUserImage.image.slice(imageString)  
   }else{
     return false
   }
 
 
  const imagePath = `./uploads/image/${responseImage}`;

// Unlink the image
fs.unlink(imagePath, async (err) => {
  if (err) {
    res.send(err)
    return false;
  }
await productModel.findOneAndDelete({_id:req.body._id})
  res.json({
    success:true,
    message:'product deleted successfully'
  })
  
  
});
}
export default imageDelete