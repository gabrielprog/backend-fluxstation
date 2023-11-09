const express = require('express');
const router = express.Router();

const FuelController = require("./controllers/fuel");
const DriverController = require("./controllers/driver");

router.get('/fuel', FuelController.read)
router.post('/fuel', FuelController.create)

router.post('/driver', DriverController.create)

module.exports = router;
