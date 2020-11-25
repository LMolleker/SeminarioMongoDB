const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Sale = require('../schemas/salesSchema');


router.post('/', async (req, res) => {
    const sale = new Sale(req.body);
    try {
        const tmpSale = await sale.save();
        res.json(tmpSale);
    } catch (error) {
        res.json({ message: error });
    }
});

//Get
router.get('/', async (req, res) => {
    try {
        const sales = await Sale.find()
        .populate('products')
        res.json(sales);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;