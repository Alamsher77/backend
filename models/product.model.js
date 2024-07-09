import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true
  },
  newPrice:{
    type:String,
    required:true
  },
  oldPrice:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
  productInfo:{
    type:String,
    required:true
  },
   categry:{
    type:String,
    required:true
  },
},{ 
  timestamps : true
})

const productModel = mongoose.model('products',productSchema)
export default productModel
