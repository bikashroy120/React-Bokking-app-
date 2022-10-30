const mongoose  = require("mongoose")


const userScema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
},{timestamps:true})


const userModel = mongoose.model("User",userScema);

module.exports = userModel;