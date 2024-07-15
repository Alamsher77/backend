
const logout = async(req,res)=>{
res.clearCookie('token', { path: 'localhost:5173' });
  res.json({
    success:true,
    message:'Logout SuccessFull'
  })
}
export default logout
