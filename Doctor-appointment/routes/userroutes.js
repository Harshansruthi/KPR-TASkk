const express = require('express')
const {loginController,registerController, authController}=require('../controllers/userctrl')
const authmiddleware = require('../middlewares/authmiddleware')
//router object
const router = express.Router()
 //routes
 //login post
 router.post('/login', loginController)
//register post
router.post('/register', registerController)
//auth post
router.post('/getUserData', authmiddleware ,authController)
module.exports = router