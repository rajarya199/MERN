const express=require('express')
 //express fn=read from express dependencies
const app=express()

require('dotenv').config() //read env config
const morgan=require('morgan')
 require('./db/connection') 
 const bodyParser=require('body-parser') //read json data
const cors=require('cors')

const categoryRoute=require('./routes/categoryRoute')
const productRoute=require('./routes/productRoute')
const userRoute=require('./routes/userRoute')
const orderRoute=require('./routes/orderRoute')
const paymentRoute=require('./routes/paymentRoute')
//middleware

//morgan-uses to access info from http req,res ,error
app.use(morgan('dev'))  //development mode --local system
app.use(bodyParser.json()) //read json data
app.use('/public/uploads',express.static('public/uploads')) //access img from public's upload 
app.use(cors())
 
// app.use('/',(req,res)=>{ //req-user input  res--server result
//     res.json({message:'this is express server'})
// })




//route
app.use('/api',categoryRoute) //use /api in any route path define in category route
app.use('/api',productRoute)
app.use('/api',userRoute)
app.use('/api',orderRoute)
app.use('/api',paymentRoute)





const port=process.env.PORT || 5000 // if env is not read run in 5000
app.listen(port,()=>{
    console.log(`server started on port${port}`)
})
 