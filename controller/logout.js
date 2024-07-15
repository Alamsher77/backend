
const logout = async(req,res)=>{
  res.clearCookie('token')
  res.json({
    success:true,
    message:'Logout SuccessFull'
  })
}
export default logout
