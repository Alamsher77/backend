import productOrders from '../../models/orderProduct.js'
const updateDeleverType = async (req,res)=>{
  try{ 
     const {id} = req.body 
     const updateDeleverOrder = await productOrders.findByIdAndUpdate(id,{orderType:'cancel'})
     console.log(updateDeleverOrder)
     if(!updateDeleverOrder){
       res.json({
         success:false,
         message:'not cancel order'
       })
       return false
     }
     res.json({
       success:true,
       message:'Your Order Was Cancel !'
     })
  }catch(error){
    res.json({
      success:false,
      message:error.message
    })
  }
}
export default updateDeleverType