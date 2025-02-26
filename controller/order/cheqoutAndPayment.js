import userModel from '../../models/usermodel.js'
import productOrders from '../../models/orderProduct.js'
import productCart from '../../models/productCart.js'
import productModel from '../../models/product.model.js'
const cheqoutAndPayment = async(req,res)=>{
  try{ 
    
   const userDetails = await userModel.findOne({_id:req.userId})
  const ProductOrderDetails = new productOrders({
    userDetails:userDetails,
    productDetails:req.body,
    orderType:'default',
  })
  
  // get product id from user 
  let productId = false  
  await ProductOrderDetails.save()
 
   const reqId = req.body
    let deletedId = []
    let updatedProduct = []
    let quantityofarry = []
    for(let i=0;i < reqId.length ; i++){
      deletedId.push(reqId[i]._id)
      quantityofarry.push(reqId[i].quantity)
      updatedProduct.push(reqId[i].productId._id)
      
    }
    const findmanyproduct = await productModel.find({_id:updatedProduct})
  const comparestock =  findmanyproduct.every((item,index)=> item.stock < quantityofarry[index] )
  if(!userDetails.name || !userDetails.email || !userDetails.phone || !userDetails.block || !userDetails.city || !userDetails.country || !userDetails.currentAddress || !userDetails.deleverAddress){
       res.json({
            message:'please add address',
            success:false
          })
    return false
  } 
   
    const updateproductquantity = await productModel.updateMany({_id:updatedProduct},{$inc:{stock: - quantityofarry }})
    const result = await productCart.deleteMany({
            _id: { $in: deletedId }
        });
     res.json({
     message:'Order Successfully',
     success:true
   }) 
  }catch(error){
    console.log(error.message)
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