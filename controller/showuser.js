import userModel from '../models/usermodel.js'
const showuser = async (req,res)=>{
  try{ 
    const allusers = await userModel.find()
    res.status(200).json(allusers)
  }catch(error){
    res.json({
      message : error.message,
      error: true,
      success : false
    })
  }
}
export default showuser

