const express=require('express')
const { postUser, postEmailConfirmation, signIn, forgetpassword, resetPassword, userList, userDetails } = require('../controllers/userController')
const router=express.Router()

router.post('/register',postUser)
router.put('/confirmation/:token',postEmailConfirmation)
router.post('/signin',signIn)
router.post('/forgetpassword',forgetpassword)
router.put('/resetpassword/:token',resetPassword)
router.get('/userlist',userList)
router.get('/userdetails/:id',userDetails)
module.exports=router