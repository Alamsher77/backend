 import jwt from 'jsonwebtoken'
const authenticateJWT = (req, res, next) => {
  
 const token = req.cookies?.token
  if (!token) {
   res.status(400).json({
     success:false,
     message:'Please login',
     auth:true,
     data:token
    })
      return false 
    }

    jwt.verify(token,process.env.secrate_key, (err, email) => {
     if(err){
       console.log('error',err)
     }
      
    req.userId = email.id
    next()
  }); 
};

export default authenticateJWT
