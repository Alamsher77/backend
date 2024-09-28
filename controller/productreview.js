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
    
  const latestProduct = allProductReview.slice()
  
  const reverProduct = [...latestProduct].reverse()
  res.json(reverProduct) 
 }catch(error){
   res.json({
     success:false,
     message:error.message
   })
   console.log(error.message)
 }
}

const deleteReview = async(req,res)=>{
  try{
    const deleteReviewItem = await reviewmodel.findByIdAndDelete(req.body.id)
  if(!deleteReviewItem){
    res.json({
      success:false,
      message:'comment deleted faild'
    })
  }
  res.json({
    success:true,
    message:'comment deleted successfull'
  })
  }catch(error){
    res.json({
      success:false,
      message:error?.message
    })
  }
}

export  {productreview,showProductreview,deleteReview}