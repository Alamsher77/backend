 import jwt from 'jsonwebtoken'
const authenticateJWT = (req, res, next) => {
  
 const token = req.cookies?.token 
   res.status(200).json({
    success:false,
    message:token
   })
 return false 
    if (!token) {
    res.status(400).json({success:false,message:'Please login'})
      return false
    }
   
    jwt.verify(token,"ahsdjehorwejdhfowrwerijlksfjasf", (err, email) => {
     if(err){
       console.log('error',err)
     }
      
    req.userId = email.id
    next()
  }); 
};

export default authenticateJWT
