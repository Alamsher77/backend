import userModel from '../../models/usermodel.js'
const userRollUpdate = async(req,res)=>{
  try{
    const userId = req.userId
    const {curentuser,roll} = req.body
  if(curentuser == userId){
    res.json({
      success:false,
      message:'You Can`t Change The Own Roll'
    })
    return false
  }
    if(!roll){
      res.json({
        success:false,
        message:'plase select the roll'
      })
      return false
    }
  const finduserandupdate = await userModel.findByIdAndUpdate(curentuser,req.body)
  if(!finduserandupdate){
    res.json({
      success:false,
      message:'not user found'
    })
    return false
  }
  res.json({
    success:true,
    message:'User Roll Updated'
  })
  }catch(error){
    res.json({
      success:false,
      message:error.message
    })
  }
}
export default userRollUpdate