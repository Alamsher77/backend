import mongoose from 'mongoose'

const categrySchema = new mongoose.Schema({
 categry : String, 
},{ 
  timestamps : true
})

const categryModel = mongoose.model('categry',categrySchema)

export default categryModel