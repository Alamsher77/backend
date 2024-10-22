import cloudinary from 'cloudinary'

const deleteCloudnaryImage = async(req,res)=>{
   try {
  
  const  key=process.env.CLOUD_API_KEY
  const name=process.env.CLOUD_NAME
  const secret=process.env.CLOUD_SECRET_KEY
  cloudinary.config({
  cloud_name:name,
  api_key:key,
  api_secret:secret
}); 
 const {publicid} = req.body 
 
 const removeids = publicid?.public_id || publicid?.publicid
    
    const result = await cloudinary.uploader.destroy(removeids);
    
    if(!result){
    res.json({
    success:false,
    message:'update faild'
  }) 
  return false
    }
 
   res.json({
    success:true,
    message:'image deleted'
  }) 
  } catch (error) {
    res.status(500).json({
    success:false,
    message:error?.message
    });
    
  }
 
}

//mulltiple delete api
const deleteCloudnaryImageMulltiple = async(req,res)=>{
   try {
 
const  key=process.env.CLOUD_API_KEY
  const name=process.env.CLOUD_NAME
  const secret=process.env.CLOUD_SECRET_KEY
  cloudinary.config({
  cloud_name:name,
  api_key:key,
  api_secret:secret
});// public_id of the image to delete
 
 const {publicid} = req.body 
const deletePromises = publicid?.map((publicId) =>{ 
      cloudinary.uploader.destroy(publicId?.public_id)
})
 const result = await Promise.all(deletePromises);
     
    if(!result){
    res.json({
    success:false,
    message:'update faild'
  }) 
  return false
    }
   res.json({
    success:true,
    message:'updated',
    data:result
  }) 
  } catch (error) {
    res.status(500).json({
    success:false,
    message:error.message
    });
    console.log(error.message)
  }
 
}
export {deleteCloudnaryImage,deleteCloudnaryImageMulltiple}