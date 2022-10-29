const hotelsModel = require("../modal/Hotels")


const createHotels = async(req,res,next)=>{
    const newHotels = new hotelsModel(req.body)
    try {
        const newHotel = await newHotels.save();
        res.status(201).json(newHotel)
    } catch (error) {
        res.status(401).json({
            message:"somthing is wrong"
        })
    }
}


const updateHotels = async(req,res,next)=>{
    try {
        const updatHotel = await hotelsModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(202).json(updatHotel)
    } catch (error) {
        res.status(401).json({
            message:"somthing is wrong"
        })
    }
}

const deletedHotels = async(req,res,next)=>{
    try {
        const deleted = await hotelsModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:"deleted successfully",
        })
    } catch (error) {
        res.status(401).json({
            message:"somthing is wrong"
        })
    }
}

const getOneHotels = async(req,res,next)=>{
    try {
        const getHotel = await hotelsModel.findById(req.params.id)
        res.status(200).json(getHotel)
    } catch (error) {
        res.status(401).json({
            message:"somthing is wrong"
        })
    }
}


const getAllHotels = async(req,res,next)=>{
    try {
        const getHotels = await hotelsModel.find()
        res.status(200).json(getHotels)
    } catch (error) {
        res.status(401).json({
            message:"somthing is wrong"
        })
    }
}


module.exports = {createHotels,updateHotels,deletedHotels,getOneHotels,getAllHotels}