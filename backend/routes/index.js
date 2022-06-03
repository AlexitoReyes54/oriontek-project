const express = require("express");
const router = express.Router();
var morgan = require('morgan')
var cors = require('cors')

const clientRoutes = require("./client_routes") 
const directionRoutes = require("./direction_routes") 

router.use(express.json())
router.use(morgan('tiny'))
router.use(cors())

router.use("/client", clientRoutes);
router.use("/direction", directionRoutes);

module.exports = router;