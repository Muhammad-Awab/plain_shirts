const express = require('express');
const router = express.Router();

const userSignUp = require('../controller/userSignUp');
const userSignIn = require('../controller/userSignIn');
const userDetailsController = require('../controller/userDetails');
const authToken = require('../middleware/authToken');

router.post('/signup', userSignUp);
router.post('/signin',userSignIn)
router.get('/user-details',authToken,userDetailsController)
module.exports=router