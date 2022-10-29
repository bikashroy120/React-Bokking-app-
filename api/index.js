const express = require("express");
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const hotelsRouter = require("./routes/hotels");
const roomsRouter = require("./routes/rooms");
const userRouter = require("./routes/users");
dotenv.config()
const PROT = 8000


app.use(express.json())

const connoctDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("db connect")
    } catch (error) {
        console.log(error)
    }
}

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/hotels', hotelsRouter)
app.use('/api/rooms', roomsRouter)


app.use((err,req,res,next)=>{
    const errorStatus = err.stutus || 500
    const errorMessage = err.message || "Something went wrong"
    return res.stutus(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})




app.listen(PROT,()=>{
    connoctDB()
    console.log("Connect to Backend")
})

