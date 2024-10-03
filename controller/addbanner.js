import mongoose from 'mongoose'

const bannerShema = new mongoose.Schema({
  bannerimage:{
    required:true,
    type:Object
  }
},{ 
  timestamps : true
})
const bannermodel = mongoose.model('banner',bannerShema)
const addbanner = async(req,res)=>{ 
  try{
    const bannerimage = req.body.publicid
   const findbanner = await bannermodel.findOne({bannerimage})
    if(findbanner){
      res.json({
        success:false,
        message:'banner allrady added'
      })
      return false
    }
    const bannerResult = new bannermodel({bannerimage})
   await  bannerResult.save()
    res.json({
    success:true,
    message:'banner added successfully'
  })
  }catch(error){
    res.json({
      success:false,
      message:error.message
    })
  }
}

const showallbanners = async(req,res)=>{
  const allbaners = await bannermodel.find()
  res.json(allbaners) 
}
const deletebanner = async(req,res)=>{
  try{
    const id = req.body.publicid
    const deletebannerwithid = await bannermodel.findByIdAndDelete(id)
    if(!deletebannerwithid){
      res.json({
        success:false,
        message:'delete faild'
      })
      return faild
    }
    res.json({
    success:true,
    message:'banner deleted successfully'
  })
  }catch(error){
    res.json({
      success:false,
      message:error.message
    })
  }
}
export {addbanner,showallbanners,deletebanner}