
const logout = async(req,res)=>{
  res.clearCookie('token', {
    secure: true,
    httpOnly: true,
    sameSite:"None"
  })
  res.json({
    success:true,
    message:'Logout SuccessFull'
  })
}
export default logout
