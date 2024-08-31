import productCart from '../../models/productCart.js'
const updateCartCount = async(req,res)=>{
  try{
    const userId = req.body._id
    const qty = req.body.quantity
     
     const updateCount = await productCart.findByIdAndUpdate(userId,{quantity:qty})
    if(!updateCount){
       res.json({
    success:true,
    message:'Server Error', 
  })
    }
      if(updateCount){
       res.json({
    success:true,
    message:'Quantity Updated SuccessFull', 
  })
    }
  
  }catch(error){
    console.log(error.message)
  }
  
}
export default updateCartCount