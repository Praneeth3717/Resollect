const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const userRouter = require('./routes/userRoute')
const loanRouter = require('./routes/loanRoute')
require('dotenv').config()

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB connect Successfully")
    app.listen(5000,()=>{
        console.log("Server running on port 5000")
    })
}
).catch((error)=>{
    console.log("Error in connecting to DB",error)
})

app.use('/user',userRouter)
app.use('/loan',loanRouter)