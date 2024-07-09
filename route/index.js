import express from 'express'
import multer from 'multer'
import path from 'path'
 import userSinigupController from '../controller/singup.js'
 import userSingInController from '../controller/singin.js'
 import showuser from '../controller/showuser.js'
 import imageDelete from '../controller/delete.image.js'
import {upload,response} from '../controller/upload.image.js'
import  {addProduct,showProduct} from '../controller/product.add.js'
 import {productCategry,showProductCategry,removeCategry} from '../controller/product.categry.js'
 import  authenticateJWT from '../auth/auth.js'
 import usergetinfo from '../controller/usergetinfo.js'
 import logout from '../controller/logout.js'
 import addToCart from '../controller/addToCart.js'
 import countCartProduct from '../controller/countCartProduct.js'
 import cartProductView from '../controller/cartProductView.js'
  import cartDelete from '../controller/cartDelete.js'
const router = express.Router()
 
// upload image api
 router.post('/uploadImage',upload.single('product'),response)
 router.delete('/imageDelete',imageDelete)
// // user singin and singup api
 router.post('/singup',userSinigupController)
 router.post('/singin',userSingInController)
 router.get('/logout',authenticateJWT,logout)
 router.get('/showuser',showuser)
 router.get('/usergetinfo',authenticateJWT,usergetinfo)

// addproduct api 
router.post('/addproduct', addProduct)
// showProduct api
 router.get('/showProduct',showProduct)
//productcategry api
 router.post('/productcategry',productCategry)
// // shwo productcategry api
 router.get('/showproductcategry',showProductCategry)
 router.delete('/removeCategry',removeCategry)

// addtoCart product
router.post('/addtoCart',authenticateJWT,addToCart)
router.get('/countCartProduct',authenticateJWT,countCartProduct)
router.get('/cartProductView',authenticateJWT,cartProductView)
router.post('/cartDelete',authenticateJWT,cartDelete)
export default router