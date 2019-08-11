const express = require('express');
const router = express.Router();

const Category = require('../app/model/Category');
const Product = require('../app/model/Product');


router.route('/categories')
    .post((req, res) => {
        const newCategory = new Category({
            name: req.body.name,
            description: req.body.description
        });
        newCategory.save((err) => {
            if (err) return res.status(400).json({ success: false, message: "There's something wrong. Check your input again" });
            res.status(201).json({ success: true, message: "Category created" });
        })
    })
    .get((req, res) => {
        Category.find({}, (err, categories) => {
            if (err) res.status(500).json({ sucess: false, message: "Something went wrong. Check your parameter/s" });
            res.status(200).json(categories);
        });
    })
    .delete((req, res) => {
        Category.remove({}, (err) => {
            if(err) res.status(500).json({ success: false, message: "Something went wrong. Check your input again" })
            res.json({ success: true, message: "Category cleared" });
        })
    })

router.route('/categories/:category_id')
    .delete((req, res) => {
        Category.findOneAndRemove({ _id: req.params.category_id }, (err, cat) => {
            if(err) return res.status(501).json({ success: false, message: "Delete failed, Check your parameter" });
            res.json({ success: true, message: "Delete success" });
        })
    })

router.route('/categories/:category_slug/products')
    .get((req, res) => {
        Category.findOne({ slug: req.params.category_slug }, (err, category) => {
            if (err) res.status(500).json({ success: false, message: "Category not found" });
            if (category) {
                Product.find({ category: category._id })
                    .populate('category')
                    .populate('stock')
                    .lean()
                    .exec((err, products) => {
                        if(err) res.status(500).json({ success: false, message: "product/s not found" });
                        res.json(products);
                    })
            }
            else {
                res.status(404).json({ success: false, message: "Products not found" });
            }
        });
    });

module.exports = router;