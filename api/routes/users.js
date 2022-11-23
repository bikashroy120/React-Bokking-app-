const express = require('express')
const { updateUser, deleteUser, getUser, getUsers } = require('../controles/userContolores')
const { varifytoken, verifyUser, verifyAdmin } = require('../uitils/verifyToken')
const userRouter = express.Router()


// userRouter.get('/chake', varifytoken ,(req,res,next)=>{
//     res.send("you are log in")
// } )



// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })

//UPDATE
userRouter.put("/:id", verifyUser, updateUser);

//DELETE
userRouter.delete("/:id", verifyUser, deleteUser);

//GET
userRouter.get("/:id", verifyUser, getUser);

//GET ALL
userRouter.get("/", verifyAdmin, getUsers);




module.exports = userRouter