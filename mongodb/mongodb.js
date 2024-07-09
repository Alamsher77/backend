import mongoose from 'mongoose'

const mongoDb = async ()=> {
  try {
    await mongoose.connect("mongodb://shopping:shopping1234@ac-xrfmegw-shard-00-00.nvds4xq.mongodb.net:27017,ac-xrfmegw-shard-00-01.nvds4xq.mongodb.net:27017,ac-xrfmegw-shard-00-02.nvds4xq.mongodb.net:27017/?replicaSet=atlas-98ij82-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=ShoppingApp")
    console.log('connected to db')
  }catch(error) {
    console.log(error)
  }
}
export default mongoDb


