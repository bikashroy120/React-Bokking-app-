const express = require('express')
const { createHotels, updateHotels, deletedHotels, getOneHotels, getAllHotels } = require('../controles/hotels-controlers')
const { varifytoken, verifyAdmin } = require('../uitils/verifyToken')
const hotelsRouter = express.Router()


hotelsRouter.post('/',verifyAdmin, createHotels)
hotelsRouter.put('/:id',verifyAdmin, updateHotels)
hotelsRouter.delete('/:id',verifyAdmin, deletedHotels)
hotelsRouter.get('/:id', getOneHotels)
hotelsRouter.get('/',  getAllHotels)



module.exports = hotelsRouter