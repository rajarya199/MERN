const express=require('express')
const { postProduct, productList, productDetails } = require('../controllers/productController')
const router=express.Router()

router.post('/postproduct',postProduct)
router.get('/productlist',productList)
router.get('/productdetails/:id',productDetails)
module.exports=router