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
    const {min,mix,...orther} = req.query
    try {
        const getHotels = await hotelsModel.find({...orther, cheapestPrice : { $gt: min || 1, $lt : mix || 9999}}).limit(req.query.limit)
        res.status(200).json(getHotels)
    } catch (error) {
        res.status(401).json({
            message:"somthing is wrong"
        })
    }
}


const countByCity = async(req,res,next)=>{
    const cities = req.query.cities.split(",")

    try {
        const list = await Promise.all(
            cities.map((city)=>{
                return hotelsModel.countDocuments({city:city})  
            })
        )

        res.status(200).json(list) 
    } catch (error) {
        next(error)
    }
}

 const countByType = async (req, res, next) => {
    try {
      const hotelCount = await hotelsModel.countDocuments({ type: "hotel" });
      const apartmentCount = await hotelsModel.countDocuments({ type: "apartment" });
      const resortCount = await hotelsModel.countDocuments({ type: "resort" });
      const villaCount = await hotelsModel.countDocuments({ type: "villa" });
      const cabinCount = await hotelsModel.countDocuments({ type: "cabin" });
  
      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
      next(err);
    }
  };


module.exports = {createHotels,updateHotels,deletedHotels,getOneHotels,getAllHotels,countByCity,countByType}