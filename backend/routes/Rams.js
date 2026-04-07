const express = require('express');
const router = express.Router();
const { Rams } = require('../models');


router.get("/", async (req, res) => {
    const listOfRams = await Rams.findAll();
    res.json(listOfRams);
});

module.exports = router;