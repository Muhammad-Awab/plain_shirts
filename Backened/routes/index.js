const express = require('express');
const router = express.Router();

const userSignUp = require('../controller/userSignUp');
const userSignIn = require('../controller/userSignIn');
const userDetailsController=require('../controller/userDetails')
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/userLogout');
const allUsers = require('../controller/allUsers');
const updateUser = require('../controller/updateUser');
const UploadProductController = require('../controller/uploadProduct');
const getProductController = require('../controller/getProduct.js');
const updateProductController = require('../controller/updateProduct.js');
const getCategoryProduct = require('../controller/getCategoryProductOne.js');
const getCategoryWiseProduct = require('../controller/getCategoryWiseProduct.js');
const getProductDetails = require('../controller/getProductDetails.js');
const searchProduct = require('../controller/searchProduct.js');
const filterProductController = require('../controller/filterProduct.js');

router.post('/signup', userSignUp);
router.post('/signin',userSignIn)
router.get('/user-details',authToken,userDetailsController)
router.get('/userLogout',userLogout)

// Admin Panel
router.get('/all-user',allUsers)
router.post('/update-user',authToken,updateUser)


//product
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)
module.exports=router