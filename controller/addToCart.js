import productCart from '../models/productCart.js'

const addToCart = async (req,res)=>{
  const {productId} = req.body
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
    quantity:1
  })
  const saveCartProduct = await addToCartProduct.save()
  
  res.json({
    success:true,
    message:'Product added',
    data:saveCartProduct
  })
}
export default addToCart
