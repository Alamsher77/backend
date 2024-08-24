import productCart from '../models/productCart.js'
const countCartProduct = async (req,res)=>{
  try{
    const currentUser = req.userId
  const findCartCount = await productCart.countDocuments({userId:currentUser})
  
  res.json({
    success:true,
    data:findCartCount
  })
  }catch(error){
    console.log(error)
  }
}
export default countCartProduct