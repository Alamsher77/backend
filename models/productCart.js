import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
  userId:String,
  productId: {
    ref: 'products',
    type:String
  },
  quantity:Number,
  size:String
},{
 timestamps : true
})

const productCart = mongoose.model('prodCart',productSchema)

export default productCart