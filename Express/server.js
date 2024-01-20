const express=require('express')
 //express fn=read from express dependencies

const app=express()
//read env config
require('dotenv').config()
const categoryRoute=require('./routes/categoryRoute')

// app.use('/',(req,res)=>{ //req-user input  res--server result
//     res.json({message:'this is express server'})
// })

//route
app.use('/api',categoryRoute) //use /api in any route path define in category route

const port=process.env.PORT || 5000 // if env is not read run in 5000
app.listen(port,()=>{
    console.log(`server started on port${port}`)
})
 