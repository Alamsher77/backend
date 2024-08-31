import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({
  userId:String,
  productId:String,
  imageCount:Number,
  quantity:Number
},{
 timestamps : true
})

const productOrders = mongoose.model('orderProducts',orderSchema)

export default productOrders