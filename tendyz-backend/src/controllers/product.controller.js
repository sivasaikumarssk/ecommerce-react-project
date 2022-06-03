const express = require('express');
const Product = require("../models/product.models");


const router = express.Router();

router.post("", async (req, res) => {
    try {

        const product = await Product.create(req.body);
        res.send(product)

    } catch (err) {
        return res.status(400).send(err.message)
    }
})


router.get("", async (req, res) => {
    try {

        const product = await Product.find().lean().exec();
        res.send(product)

    } catch (err) {
        return res.status(400).send(err.message)
    }
})


router.get("/:id", async (req, res) => {
    try {

        const product = await Product.findById(req.params.id).lean().exec()
        res.send(product)

    } catch (err) {
        return res.status(400).send(err.message)
    }
})


module.exports = router
