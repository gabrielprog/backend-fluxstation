const express = require('express');
const router = express.Router();

const FuelController = require("./controllers/fuel");

router.get('/fuel', FuelController.read)

module.exports = router;
