import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
  userId:String,
  productId: {
    ref: 'products',
    type:String
  },
  quantity:Number
},{
 timestamps : true
})

const productCart = mongoose.model('prodCart',productSchema)

export default productCart