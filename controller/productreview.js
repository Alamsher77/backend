import reviewmodel from '../models/reviewmodel.js'
import usermodel from '../models/usermodel.js'
const productreview = async (req,res)=>{
 try{
  const userId = req.userId
  const {productId,userRatting,comment} = req.body
   if(!productId,!userRatting,!comment){
     res.json({
  success:false,
  message:'all fields required'
})
return false
   }
 const getsingleusers = await usermodel.findById(userId)
const {name,email,profilePic} = getsingleusers

const savereviewitems = new reviewmodel({
  productId:productId,
  rating:userRatting,
  comment:comment,
  users:{name,email,profilePic}
})
res.json({
  success:true,
  message:'Thanks To Rate This Product'
})
 await savereviewitems.save()
 }catch(error){ 
   res.json({
     success:false,
     message:error?.message
   })
 }
}
const showProductreview = async(req,res)=>{
 try{
  const {productId} = req.body
  const allProductReview = await reviewmodel.find({productId})
  res.json(allProductReview) 
 }catch(error){
   res.json({
     success:false,
     message:error.message
   })
   console.log(error.message)
 }
}

export  {productreview,showProductreview}