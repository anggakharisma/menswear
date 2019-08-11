const express = require('express');
const router = express.Router();

const Product = require('../app/model/Product');
const Category = require('../app/model/Category');
const mongoose = require('mongoose');

const Stock = require('../app/model/Stock');


router.route('/products')
    .post((req, res) => {
        let stock = new Stock({
            name: "Size",
            value: { S: 10, M: 10 }
        });
        stock.save((err) => {
            if (err) {
                res.send(err);
            }

            let newProduct = new Product({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                stock: stock._id,
            });

            if (req.body.category) {
                newProduct.category = req.body.category;
            }

            newProduct.save(function (err, product) {
                if (err) return res.status(500).json({ success: false, message: "There's something wrong" });
                res.status(201).json({ message: "Product created" })
            });
        });
    })
    .get((req, res) => {
        Product.find({})
            .populate('stock')
            .populate('category')
            .lean()
            .exec((err, products) => {
                if (err) res.send(err);
                res.json(products);
            });
    });

router.route("/products/:product_id")
    .get((req, res) => {
        //TODO: Get product with id or slug
        Product.findOne({ _id: req.params.product_id })
            .populate('stock category')
            .lean()
            .exec((err, product) => {
                if (err || product === null) res.status(404).json({ success: false, message: "Product not found. Check your input" });
                res.json(product);
            })
    })
    .put((req, res) => {
        Product.findById(req.params.product_id, (err, product) => {
            if (err) {
                res.send(err);
            }
            product.name = req.body.name;
            product.description = req.body.description;
            product.price = req.body.price;
            product.save((err) => {
                if (err) {
                    res.status(500).json({ success: false, message: "Error on saving product. Check your input again" });
                }
                res.status(200).json({ message: "Product updated" });
            });
        });
    })
    .delete(({ params }, res) => {
        Product.findOneAndRemove({ _id: params.product_id }, (err, product) => {
            if(err || product === null) {
                res.status(404).json({ success: false, message: "Product not found" });
            }
            res.json({ success: true, message: "Product deleted" })
        });
    });

module.exports = router;