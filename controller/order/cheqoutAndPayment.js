import userModel from '../../models/usermodel.js'
import productOrders from '../../models/orderProduct.js'
import productCart from '../../models/productCart.js'
const cheqoutAndPayment = async(req,res)=>{
  try{ 
   const userDetails = await userModel.findOne({_id:req.userId})
     
  const ProductOrderDetails = new productOrders({
    userDetails:userDetails,
    productDetails:req.body,
    orderType:'default',
  })
  await ProductOrderDetails.save()
  
   res.json({
     message:'Order Successfully',
     success:true
   })
   const reqId = req.body
    let deletedId = []
    for(let i=0;i < reqId.length ; i++){
      deletedId.push(reqId[i]._id)
    }
     const result = await productCart.deleteMany({
            _id: { $in: deletedId }
        });
        if(!result){
          res.json({
            message:'delete not found',
            success:false
          })
          return false
        }
   
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
  const reverallOrders = [...userOrderProducts].reverse()
  res.json({
    success:true,
    data:reverallOrders
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