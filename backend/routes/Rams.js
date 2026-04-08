const express = require('express');
const router = express.Router();
const { Rams, RamTypes } = require('../models');


router.get("/", async (req, res) => {
    const listOfRams = await Rams.findAll({ include: [RamTypes] });
    res.json(listOfRams);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const ram = await Rams.findByPk(id, { include: [RamTypes] });
    res.json(ram);
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    await Rams.update(updatedData,
        { where: { id: id } }
    )
    res.json(updatedData);
})

router.post('/', async (req, res) => {
    const newRam = req.body;
    await Rams.create(newRam);
    res.json(newRam);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Rams.destroy({
        where: {
            id: id
        }
    });
    res.json("DELETED SUCCESSFULLY");
});

module.exports = router;