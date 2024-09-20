import mongoose from 'mongoose'

const categrySchema = new mongoose.Schema({
 categry : String, 
 catelogo : Object,
},{ 
  timestamps : true
})

const categryModel = mongoose.model('categry',categrySchema)

export default categryModel