const express=require('express')
const { testFunction, postCategory } = require('../controllers/categoryController')
const router=express.Router()
//router.method('url',function)
router.get('/demo',testFunction)
router.post('/postcategory',postCategory)
module.exports=router