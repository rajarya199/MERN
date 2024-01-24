const express=require('express')
 //express fn=read from express dependencies
const app=express()

require('dotenv').config() //read env config
const morgan=require('morgan')
 require('./db/connection') 
 const bodyParser=require('body-parser') //read json data
const categoryRoute=require('./routes/categoryRoute')


//middleware

app.use(morgan('dev'))  //development mode --local system
app.use(bodyParser.json()) //read json data
//morgan-uses to access info from http req,res ,error

 
// app.use('/',(req,res)=>{ //req-user input  res--server result
//     res.json({message:'this is express server'})
// })




//route
app.use('/api',categoryRoute) //use /api in any route path define in category route






const port=process.env.PORT || 5000 // if env is not read run in 5000
app.listen(port,()=>{
    console.log(`server started on port${port}`)
})
 