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

//virtual field
userSchema.virtual('password')
//set get fn
.set(function(password){
    this._password=password 
    this.salt=uuidv1() //random generated value 
    this.hashed_password=this.encryptPassword(password) 
}) 
.get(function(){
    return this._password  
})

//define methods
userSchema.methods={
    encryptPassword: function(password){
        if(!password) return ''
        try{
            return crypto 
            .Hmac('sha1',this.salt) //algo to encrypt
            .update(password)
            .digest('hex') //in hex format
        }
        catch(err){
            return err
        } 
    }
}
module.exports=mongoose.model('User',userSchema)

