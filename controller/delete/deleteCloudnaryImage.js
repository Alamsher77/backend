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
});// public_id of the image to delete
 
    const result = await cloudinary.uploader.destroy(req.body.publicid);
    
    if(!result){
    res.json({
    success:false,
    message:'update faild'
  }) 
  return faild
    }
   res.json({
    success:true,
    message:'updated'
  }) 
  } catch (error) {
    res.status(500).json({
    success:false,
    message:error.message
    });
    console.log(error.message)
  }
 
}
export default deleteCloudnaryImage