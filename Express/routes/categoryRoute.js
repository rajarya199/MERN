const express=require('express')
const { testFunction } = require('../controllers/categoryController')
const router=express.Router()
//router.method('url',function)
router.get('/demo',testFunction)

module.exports=router