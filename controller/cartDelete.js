import productCart from '../models/productCart.js'

const cartDelete = async (req,res)=>{
  try{
     const cartId = req.body.id
    const cartIteamDelete = await productCart.findOneAndDelete({_id:cartId})
     console.log(cartIteamDelete)
     res.json({
       message:'Iteam Deleted successsFull',
       success:true
     })
 
  }catch(error){
    console.log(error)
  }
}
export default cartDelete