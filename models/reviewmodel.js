import mongoose from 'mongoose'
const reviewSchema = new mongoose.Schema({
  productId:{
    type:String,
    required:true
  },
  rating:{
    type:Number,
    required:true
  },
  comment:{
    type:String,
    required:true,
  },
  users:Object,
},{
 timestamps : true
});

const reviewmodel = mongoose.model('Review', reviewSchema);
export default reviewmodel
