const express=require('express')
const { postOrder, orderList, orderDetails } = require('../controllers/orderController')
const router=express.Router()
router.post('/postorder',postOrder)
router.get('/orderlist',orderList)
router.get('/orderdetails/:id',orderDetails)

module.exports=router