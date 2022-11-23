 const userModel = require('../modal/user-modal')
 const bcrypt = require("bcrypt");
const { creactError } = require('../uitils/error');
const jwt = require("jsonwebtoken")


 const regester = async(req,res,next)=>{

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    try {
        const newUser = new userModel({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })

        await newUser.save()
        res.status(201).json({
            message:"user has creacet"
        })


    } catch (error) {
        next(error)
    }
 }


 const login = async(req,res,next)=>{
    try {
        const user = await userModel.findOne({username:req.body.username})
        if(!user) return next(creactError(404,"User not found!"))

        isPasswordCorrect = await bcrypt.compare(req.body.password,user.password)

        if(!isPasswordCorrect) return next(creactError(400,"Wrong user and password"))

        const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},"abcdef")

        const {password,isAdmin,...orderDeteles} = user._doc
        res.cookie("access_token",token,{httpOnly:true}).status(200).json({...orderDeteles})
    } catch (error) {
        next(error)
    }
 }

 module.exports= {regester,login}