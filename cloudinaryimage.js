import React from 'react'
import {Cloudinary} from '@cloudinary/url-gen';
const Cloudinaryimage = ()=>{
  const cld = new Cloudinary({
    cloud:{
      cloudName:"demo"
    }
  })
}