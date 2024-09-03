import userModel from '../../models/usermodel.js'
import productOrders from '../../models/orderProduct.js'
const cheqoutAndPayment = async(req,res)=>{
  try{
   const userDetails = await userModel.findOne({_id:req.userId})
     
  const ProductOrderDetails = new productOrders({
    userDetails:userDetails,
    productDetails:req.body
  })
  await ProductOrderDetails.save()
   res.json({
     message:'access',
     success:true
   })
   console.log(ProductOrderDetails)
  }catch(error){
    res.json({
      message:error.message,
      success:false
    })
  }
}

const showOrderProducts = async(req,res)=>{
try{
   
  const userOrderProducts = await productOrders.find({'productDetails.userId':req.userId}) 
  if(!userOrderProducts){
    res.json({
      success:false,
      message:'Your order not Found'
    })
    return false
  }
  res.json({
    success:true,
    data:userOrderProducts
  })
}catch(error){
  res.json({
    success:false,
    message:error.message
  })
console.log('catch error ',error.message)
}
}

export  {cheqoutAndPayment,showOrderProducts}