import productOrders from '../../models/orderProduct.js'
const updateDeleverType = async (req,res)=>{
  try{ 
     const {id,type} = req.body  
    const updateDeleverOrder = await productOrders.findByIdAndUpdate(id,{orderType:type})
    console.log(updateDeleverOrder)
    if(!updateDeleverOrder){
      res.json({
        success:false,
        message:'not cancel order'
      })
      return false
    }
    if(type == 'cancel'){
       res.json({
       success:true,
       message:'Your Order Was Canceled !'
     })
    }else{
      res.json({
       success:true,
       message:'This Order Was Comfirm !'
     })
    }
  }catch(error){
    res.json({
      success:false,
      message:error.message
    })
  }
}
export default updateDeleverType