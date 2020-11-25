const express = require('express');
const router = express.Router();
const Product = require('../schemas/productSchema');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products); 
    } catch (error) {
        res.json({ message: error });
    }
});

router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        stock: req.body.stock,
        price: req.body.price
    });
    try {
        const tmpProduct = await product.save();
        res.json(tmpProduct);
    } catch (error) {
        res.json({ message: error });
    }
});

router.delete('/:id', async (req,res) => {
    try {
        const tmpProduct = await Product.remove({ _id: req.params.id });
        res.json(tmpProduct);
    } catch (error) {
        res.json({ message: error });
    }
});

router.patch('/:id', async (req,res) => {
    try {
        const tmpProduct = await Product.updateOne(
            { _id: req.params.id },
            {$set: {
                name: req.body.name,
                description: req.body.description,
                stock: req.body.stock,
                price: req.body.price
            }});
        res.json(tmpProduct);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;