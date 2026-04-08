const express = require('express');
const router = express.Router();
const { RamTypes } = require('../models');


router.get("/", async (req, res) => {
    const listOfRamTypes = await RamTypes.findAll();
    res.json(listOfRamTypes);
});

module.exports = router;