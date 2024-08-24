import productCart from '../models/productCart.js' 
const cartProductView = async (req,res)=>{
 try{
    const currentUser = req.userId
  const findProductCategry = await productCart.find({userId:currentUser}).populate("productId")
  
  res.json({
    success:true,
    allProducts:findProductCategry
  })

 }catch(error){
   console.log(error)
 }
}
export default cartProductView