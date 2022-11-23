const express = require('express');
const { createRoom, updateRoomAvailability, updateRoom, deleteRoom, getRoom, getRooms } = require('../controles/roomContolores');
const { verifyAdmin } = require('../uitils/verifyToken');
const roomsRouter = express.Router()


//CREATE
roomsRouter.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
roomsRouter.put("/availability/:id", updateRoomAvailability);
roomsRouter.put("/:id", verifyAdmin, updateRoom);
//DELETE
roomsRouter.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

roomsRouter.get("/:id", getRoom);
//GET ALL

roomsRouter.get("/", getRooms);



module.exports = roomsRouter