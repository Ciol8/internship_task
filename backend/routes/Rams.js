const express = require('express');
const router = express.Router();
const { Rams, RamType } = require('../models');


router.get("/", async (req, res) => {
    const listOfRams = await Rams.findAll({ include: [RamType] });
    res.json(listOfRams);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const Ram = await Rams.findByPk(id);
    res.json(Ram);
})

module.exports = router;