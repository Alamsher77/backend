import productCart from '../models/productCart.js'
const countCartProduct = async (req,res)=>{
  const currentUser = req.userId
  const findCartCount = await productCart.countDocuments({userId:currentUser})
  
  res.json({
    success:true,
    data:findCartCount
  })
}
export default countCartProduct