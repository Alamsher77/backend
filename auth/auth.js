 import jwt from 'jsonwebtoken'
const authenticateJWT = (req, res, next) => {
  
 const token = req.cookies?.token 

 console.log(token)
 res.json({
  message:token
 })
 /*  if (!token) {
   res.status(400).json({
     success:false,
     message:'Please login'+token,
     data:token
    })
      return false
    }
   */
 return false

    jwt.verify(token,"ahsdjehorwejdhfowrwerijlksfjasf", (err, email) => {
     if(err){
       console.log('error',err)
     }
      
    req.userId = email.id
    next()
  }); 
};

export default authenticateJWT
