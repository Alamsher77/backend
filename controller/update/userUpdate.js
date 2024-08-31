import userModel from '../../models/usermodel.js'
const userUpdate = async(req,res)=>{ 
    const findAndUpdateUserDetails = await userModel.findByIdAndUpdate(req.userId,req.body)
    if(!findAndUpdateUserDetails){
      res.json({
        success:false,
        message:'Updated User Not found'
      })
      return false
    }
    
    
    res.json({
      success:true,
      message:'User Details Update Successfull',
      data:findAndUpdateUserDetails
    })
}
export default userUpdate