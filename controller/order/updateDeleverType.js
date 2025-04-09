import productOrders from '../../models/orderProduct.js'
import productModel from '../../models/product.model.js'
const updateDeleverType = async (req,res)=>{
  try{ 
   
 
     const {id,type,productQuantity} = req.body  
       
    const updateDeleverOrder = await productOrders.findByIdAndUpdate(id,{orderType:type})
    
    if(!updateDeleverOrder){
      res.json({
        success:false,
        message:'not cancel order'
      })
      return false
    }
    if(type != 'cancel'){ 
       res.json({
       success:true,
       message:'Order Delever SuccessFull'
     })
     return false
    }
    let updatedProduct = []
    let quantityofarry = []
    for(let i=0;i < productQuantity.length ; i++){ 
      updatedProduct.push(productQuantity[i]?.productId?._id)
      quantityofarry.push(productQuantity[i]?.quantity)
    
    }
 
    const updates = updatedProduct.map((id, index) => {
      return productModel.updateOne(
        { _id: id },
        { $inc: { stock: + quantityofarry[index] } }
      );
     
    });
    
   await Promise.all(updates); 
   
     res.json({
        success:true,
        message:'Order cancel SuccessFull'
      }) 
  }catch(error){
    res.json({
      success:false,
      message:error.message
    })
  }
}
export default updateDeleverType