import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({
  userDetails:{},
  productDetails:{},
},{
 timestamps : true
})

const productOrders = mongoose.model('orderProducts',orderSchema)

export default productOrders