import userModel from '../../models/usermodel.js'
import productOrders from '../../models/orderProduct.js'
import productCart from '../../models/productCart.js'
import productModel from '../../models/product.model.js'
const cheqoutAndPayment = async(req,res)=>{
  try{ 
    
   const userDetails = await userModel.findOne({_id:req.userId})
 
  const ProductOrderDetails = new productOrders({
    userDetails:userDetails,
    productDetails:req.body?.data,
    orderType:'default',
    paymentMethod:req?.body?.paymentMethod
  })
 
  // get product id from user 
  let productId = false  
  
   const reqId = req.body?.data
    let deletedId = []
    let updatedProduct = []
    let quantityofarry = []
    for(let i=0;i < reqId.length ; i++){
      deletedId.push(reqId[i]?._id)
      quantityofarry.push(reqId[i]?.quantity)
      updatedProduct.push(reqId[i]?.productId?._id)
    
    }
    const findmanyproduct = await productModel.find({_id:updatedProduct})
    // seqence data 
    const orderedData = updatedProduct.map((id,index) => findmanyproduct.find(item => item?._id.toString() === id));
    // stock compare function
      let qunatitymessage = ''
      let comparestock = true
     orderedData.map((iteam,index)=>{  
      const result =  Number(iteam?.stock) < Number(reqId[index]?.quantity) 
        
       if(result) {
         qunatitymessage += `Available quantity ${iteam?.stock} Your quantity ${reqId[index]?.quantity} `
        comparestock = false
       }
         })
  
   if(!comparestock){
     res.json({
       success:false,
       message:`${qunatitymessage} / Please Cheaqed quantity`
     })
     return false
   }  

 const updates = updatedProduct.map((id, index) => {
      return productModel.updateOne(
        { _id: id },
        { $inc: { stock: - quantityofarry[index] } }
      );
     
    });
    
   await Promise.all(updates);
     
    const result = await productCart.deleteMany({
            _id: { $in: deletedId }
        });
    
     res.json({
     message:'Order Successfully',
     success:true
   }) 
   
  await ProductOrderDetails.save()
  }catch(error){
    console.log(error?.message)
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