import mongoose from 'mongoose'

const mongoDb = async ()=> {
  try {
    await mongoose.connect("mongodb+srv://shopping:shopping1234@shoppingapp.nvds4xq.mongodb.net/shoppingapp")
    console.log('connected to db')
  }catch(error) {
    console.log(error)
  }
}
export default mongoDb


// mongodb+srv://shopping:<password>@shopping1.hvzin2o.mongodb.net/?retryWrites=true&w=majority&appName=shopping1

// mongodb+srv://shopping:shopping1234@shopping1.hvzin2o.mongodb.net/shoppingapp