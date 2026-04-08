const express = require('express');
const router = express.Router();
const { Rams, RamTypes } = require('../models');


router.get("/", async (req, res) => {
    const listOfRams = await Rams.findAll({ include: [RamTypes] });
    res.json(listOfRams);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const Ram = await Rams.findByPk(id);
    res.json(Ram);
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const ram = req.body;
    await Rams.update(ram,
        { where: { id: id } }
    )
    res.json(ram);
})

module.exports = router;