const express = require('express')
const { createHotels, updateHotels, deletedHotels, getOneHotels, getAllHotels } = require('../controles/hotels-controlers')
const hotelsRouter = express.Router()


hotelsRouter.post('/', createHotels)
hotelsRouter.put('/:id', updateHotels)
hotelsRouter.delete('/:id', deletedHotels)
hotelsRouter.get('/:id', getOneHotels)
hotelsRouter.get('/', getAllHotels)



module.exports = hotelsRouter