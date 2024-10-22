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
import {updateProduct,findByIdProduct} from '../controller/update/updateProduct.js'
import userUpdate from '../controller/update/userUpdate.js'
import updateCartCount from '../controller/update/updateCartCount.js'
import userRollUpdate from '../controller/update/userRollUpdate.js'
import {latestProduct,randomProduct} from '../controller/latestProduct.js'
import {cheqoutAndPayment,showOrderProducts} from '../controller/order/cheqoutAndPayment.js'
import  updateDeleverType from '../controller/order/updateDeleverType.js'
import  allOrderProducts from '../controller/order/allOrders.js'
import  {deleteCloudnaryImage,deleteCloudnaryImageMulltiple} from '../controller/delete/deleteCloudnaryImage.js'
import {addbanner,showallbanners,deletebanner} from '../controller/addbanner.js'
import {productreview,showProductreview,deleteReview} from '../controller/productreview.js'
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

// update Product functions
router.post('/updateProduct/:id',updateProduct)
router.get('/findByIdProduct/:id',findByIdProduct)

// update users functions
router.post('/userUpdate',authenticateJWT,userUpdate)
// update cartCountProduct 
router.post('/updateCartCount',authenticateJWT,updateCartCount)

// update user roll api
router.post("/userRollUpdate",authenticateJWT,userRollUpdate)
// latest Product api
router.get('/latestProduct',latestProduct)
// random Product api
router.get('/randomProduct',randomProduct)
// cheqoutAndPayment api
router.post('/cheqoutAndPayment',authenticateJWT,cheqoutAndPayment)
router.get('/showOrderProducts',authenticateJWT,showOrderProducts)
router.post('/updateDeleverType',updateDeleverType)
router.get('/allOrderProducts',allOrderProducts)

// cloudnary image delete api
router.post('/deleteCloudnaryImage',deleteCloudnaryImage)
router.post('/deleteCloudnaryImageMulltiple',deleteCloudnaryImageMulltiple)
router.post('/addbanner',addbanner)
router.get('/showallbanners',showallbanners)
router.post('/deletebanner',deletebanner)

// review items api 
router.post('/productreview',authenticateJWT,productreview)
router.post('/showProductreview',showProductreview)
router.post('/deleteReview',deleteReview)

// settings middilwere functions api
import {changeAppNameAndIcon,updateAppNameAndIcon,getappnameandicon} from '../controller/settings/app.name.app.icon.js'

router.post('/changeAppNameAndIcon',changeAppNameAndIcon)
router.post('/updateAppNameAndIcon',updateAppNameAndIcon)
router.get('/getappnameandicon',getappnameandicon)

// mail sender and verify eail api
import emailsender from '../controller/emailsender.js'
import verifyforgatepassword from '../controller/verifyforgatepassword.js';
router.post('/emailsender',emailsender)
router.post('/verifyforgatepassword',verifyforgatepassword)
export default router