const User = require('../modal/user-modal')

const updateUser = async(req,res,next)=>{
    try {
        const updated = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updated)
    } catch (error) {
        next(error)
    }
}


const deleteUser = async(req,res,next)=>{
    try {
        const deleted = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:"deleted successfully",
        })
    } catch (error) {
        next(error)
    }
}


const getUser = async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

const getUsers = async(req,res,next)=>{
    try {
        const users = await hotelsModel.find()
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}



module.exports = {updateUser,deleteUser,getUser,getUsers}