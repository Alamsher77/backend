
const logout = async(req,res)=>{
  try{
    res.clearCookie('token',{
    secure: true,
    httpOnly: true,
    sameSite:"None"
  });
  res.json({
    success:true,
    message:'Logout SuccessFull'
  })
  }catch(error){
    console.log(error)
  }
}
export default logout
