import mongoose from 'mongoose'

const mongoDb = async ()=> {
  const url = "mongodb+srv://shopping:shopping1234@shoppingapp.nvds4xq.mongodb.net/shoppingapp"
  
  try {
   
mongoose.connect(url)
    console.log("db connected success")
  }catch(error) {
    console.log(error)
  }
}
export default mongoDb


