import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({
  userDetails:{},
  productDetails:{},
  orderType:String,
},{
 timestamps : true
})

const productOrders = mongoose.model('orderProducts',orderSchema)

export default productOrders