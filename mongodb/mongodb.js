import mongoose from 'mongoose'

const mongoDb = async ()=> { 
  try { 
 await mongoose.connect(process.env.database);
    console.log("db connected success")
  }catch(error) {
    console.log(error?.message)
  }
}
export default mongoDb


