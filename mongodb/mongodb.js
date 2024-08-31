import mongoose from 'mongoose'

const mongoDb = async ()=> {
 
  try {
   
mongoose.connect(process.env.database);
    console.log("db connected success")
  }catch(error) {
    console.log(error)
  }
}
export default mongoDb


