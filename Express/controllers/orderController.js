const OrderItem=require('../models/orderItemModel')
const orderModel = require('../models/orderModel')
const Order=require('../models/orderModel')

//post order
//from same insert we are sending data to both order and orderitem
exports.postOrder=async(req,res)=>{
     //each orderItemsIds of ordermodel is maped to orderitemmodel 
           
     //sent data to OrderItem schema of order-item model from this orderItem

    const orderItemIds=Promise.all(req.body.orderItems.map(async orderItem=>{
           let newOrderItem=new OrderItem({
            quantity:orderItem.quantity,
            product:orderItem.product
           }) 
           newOrderItem=await newOrderItem.save()
           return newOrderItem._id //return id generate when new order is placed is stored in orderItem._id
    
    }))
const orderItemIdsresolved=await orderItemIds
//calculating total price
//map-- to take sum of multiple item
const totalAmount=await Promise.all(orderItemIdsresolved.map(async orderId=>{
    const itemOrder=await OrderItem.findById(orderId).populate('product','product_price') //we need product price from product so we populate orderitem with product
    const total=itemOrder.quantity* itemOrder.product.product_price 
    return total //[300,400,500]
}))
const TotalPrice=totalAmount.reduce((a,b)=>a+b,0)//sum of all array value of total

let order=new Order({
    orderItems:orderItemIdsresolved,
    shippingAddress1:req.body.shippingAddress1,
    shippingAddress2:req.body.shippingAddress2,
    city:req.body.city,
    zip:req.body.zip,
    country:req.body.country,
    phone:req.body.phone,
    totalPrice:TotalPrice, // above calc Totalprice 
    user:req.body.user
})
order=await order.save()
if(!order){
    return res.status(400).json({error:'something went wrong'})

}
res.send(order)

}