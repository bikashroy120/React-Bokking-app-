const express = require('express')
const { regester, login } = require('../controles/auth-contolores')
const authRouter = express.Router()

authRouter.post("/register", regester)

authRouter.post("/login", login)




module.exports = authRouter