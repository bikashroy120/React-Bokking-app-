const express = require('express')
const { createHotels, updateHotels, deletedHotels, getOneHotels, getAllHotels, countByCity, countByType } = require('../controles/hotels-controlers')
const { varifytoken, verifyAdmin } = require('../uitils/verifyToken')
const hotelsRouter = express.Router()


hotelsRouter.post('/',verifyAdmin, createHotels)
hotelsRouter.put('/:id',verifyAdmin, updateHotels)
hotelsRouter.delete('/:id',verifyAdmin, deletedHotels)
hotelsRouter.get('/find/:id:id', getOneHotels)
hotelsRouter.get('/',  getAllHotels)

hotelsRouter.get("/countByCity", countByCity);
hotelsRouter.get("/countByType", countByType);
// hotelsRouter.get("/")




module.exports = hotelsRouter