const express = require("express");
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const hotelsRouter = require("./routes/hotels");
const roomsRouter = require("./routes/rooms");
const userRouter = require("./routes/users");
const cookieParser = require("cookie-parser")
const cors = require("cors")
dotenv.config()
const PROT = 8000


app.use(express.json())
app.use(cookieParser())
app.use(cors())

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
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
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

