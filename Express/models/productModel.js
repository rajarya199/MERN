const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema
//ObjectId is used ti link data between different cillection (table)

const productSchema=new mongoose.Schema({
    product_name:{
        type:String,
        required:true,
        trim:true 
    },
    product_price:{
        type:Number,
        required:true,

    },
    countInStock:{
        type:Number,
        required:true
    },
    product_description:{
        type:String,
        required:true
    },
    product_image:{
        type:String,
        required:true
    },
    product_rating:{
        type:Number,
        default:0,
        max:5 
    },
    category:{
        type:ObjectId, //to link with  ref table
        required:true,
        ref:'Category' //link to this ref table
    }
},{timestamps:true})
module.exports=mongoose.model('Product',productSchema)