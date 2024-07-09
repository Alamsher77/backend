 import userModel from '../models/usermodel.js'
  
const usergetinfo = async(req,res)=>{
 
 const authUsers = await userModel.findOne({_id:req.userId})
   res.status(200).json({message:'ok',success:true,data:authUsers})
}
export default usergetinfo