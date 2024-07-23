import productModel from '../models/product.model.js'

const addProduct = async (req,res)=>{
  try{
  const {name,newPrice,oldPrice,image,productInfo,categry} = req.body
  
  if(name == '' || newPrice == '' || oldPrice == '' ||productInfo == '' || image == ''){
    res.json({
      success:false,
      message:'all fields required' 
    })
    return false
  }
  const findProduct = await productModel.findOne({name})
  if(findProduct){
    res.json({
      success:false,
      message:'product already added'
    })
    return false
  }
  const allProducts = new productModel({
    name,
    newPrice,
    oldPrice,
    image,
    productInfo,
    categry,
  })
  
  await allProducts.save()
  res.json({
    success:true,
    data:allProducts,
    message:'Product added'
  })
    console.log(allProducts)
  }catch(error){
    res.json({
      success:false,
      message:error.message
    })
  }
}
const showProduct = async (req,res) =>{
  const showProductAll = await productModel.find()
  res.json(showProductAll)
}
export   {addProduct,showProduct}
