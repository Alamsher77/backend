import productModel from '../models/product.model.js'

const latestProduct = async (req,res)=>{
  const allProduct = await productModel.find()
  
  const latestProduct = allProduct.slice(-4)
  
  const reverProduct = [...latestProduct].reverse()
  res.json(reverProduct)
}

const randomProduct = async (req,res)=>{
  const allProduct = await productModel.find() 
  
  function getRandomObjects(array, num) {
    let shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

   const num = parseInt(req.query.num) || 1000; // Get number of random objects from query parameter
    const randomValue = getRandomObjects(allProduct, num);
  res.json(randomValue)
}
export  {latestProduct,randomProduct}