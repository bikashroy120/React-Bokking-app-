const mongoose  = require("mongoose")


const hotelsScema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    distines:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    photos:{
        type:[String],
    },
    desc:{
        type:String,
        required:true
    },
    retting:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String]
    },
    cheapestPrice:{
        type:Number,
        required:true,
    },
    featured:{
        type:Boolean,
        default:false,
    }
})


const hotelsModel = mongoose.model("Hotels",hotelsScema);

module.exports = hotelsModel;