const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema
//table of order quantity and its product id
const orderItemSchema=new mongoose.Schema({
    quantity:{
        type:NUmber,
        required:true 
    },
    product:{
        type:ObjectId,
        required:true,
        ref:'Product'
    }
},{timestamps:true})
module.exports=mongoose.model('OrderItem',orderItemSchema)