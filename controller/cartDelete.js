import productCart from '../models/productCart.js'

const cartDelete = async (req,res)=>{
    const cartId = req.body.id
    const cartIteamDelete = await productCart.findOneAndDelete({_id:cartId})
     
     res.json({
       message:'Iteam Deleted successsFull',
       success:true
     })
}
export default cartDelete