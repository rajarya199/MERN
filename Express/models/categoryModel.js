const mongoose=require('mongoose')

//schema--structure  data &structure
const categorySchema=new mongoose.Schema({
    category_name:{
        type:String, 
        required:true,
        unique:true,
        trim:true, //remove white-space

    }

},{timestamps:true})
//timestamp will create createdAt,updatedAt 

module.exports=mongoose.model('Category',categorySchema) //Category-name of model to exports 
//categorySchema-from above created schema