const mongoose=require('mongoose')
const uuidv1=require('uuidv1')
const crypto =require('crypto')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true

    },
    role:{
        type:Number,
        default:0
    },
    hashed_password:{
        type:String,
        required:true
    },
    salt:String,
    isVerified:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exprts=mongoose.model('User',userSchema)