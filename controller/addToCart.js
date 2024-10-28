import productCart from '../models/productCart.js'

const addToCart = async (req,res)=>{
  try{
  const {productId,size} = req.body
  const userId = req.userId
  const findCartProduct = await productCart.findOne({userId,productId})
  
  if(findCartProduct){
    res.json({
      success:false,
      message:'Product allrady added to cart'
    })
    return false
  }
  
  const addToCartProduct = new productCart({
    productId,
    userId,
    quantity:1,
    size,
  })
  const saveCartProduct = await addToCartProduct.save()
  
  res.json({
    success:true,
    message:'Product added to cart',
    data:saveCartProduct
  })
  }catch(error){
    res.json({
      success:false,
      message:error.message
    })
  }
}
export default addToCart
