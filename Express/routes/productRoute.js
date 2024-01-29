const express=require('express')
const { postProduct, productList } = require('../controllers/productController')
const router=express.Router()

router.post('/postproduct',postProduct)
router.get('/productlist',productList)
module.exports=router