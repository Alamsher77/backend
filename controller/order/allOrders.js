import productOrders from '../../models/orderProduct.js'
const allOrderProducts = async(req,res)=>{
try{
   
  const userOrderProducts = await productOrders.find() 
  if(!userOrderProducts){
    res.json({
      success:false,
      message:'Your order not Found'
    })
    return false
  }
  const reverseorderdata = [...userOrderProducts].reverse()
  res.json({
    success:true,
    data:reverseorderdata
  })
}catch(error){
  res.json({
    success:false,
    message:error.message
  }) 
}
}
export default allOrderProducts