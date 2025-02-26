import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path  from 'path'
import mongoDb from './mongodb/mongodb.js'
import router from './route/index.js'
import cookieParser from 'cookie-parser'
dotenv.config()   
const app = express()
 app.use(express.json()) 
// const url = 'http://localhost:5173'
const url = "https://easyshopemart.netlify.app"
app.use(cors({
  origin:url,
  credentials:true
})) 

app.use(cookieParser())
 
 
 app.use('/api',router)
 
const PORT = 4000 

app.get('/',(req,res)=>{
  res.send('app running on global')
})

app.use((err,req,res,next)=>{
  console.error(err.stack)
  res.status(500).json({
    success:false,
    message:err.message || 'internal server error'
  })
})
mongoDb().then(()=>{
    app.listen(PORT,()=>{
  console.log(`server is running port ${PORT}`)
})
})
