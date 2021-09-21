const { Product } = require('../models/product.model');

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.json(err))
}
module.exports.getProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}
module.exports.newProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({ title, price, description })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}
module.exports.updateProduct = (req, res) => {
    const {title, description, price} = req.body
    Product.findOneAndUpdate({ _id: req.params.id }, {title, price, description}, { new: true })
        .then(updatedP => res.json(updatedP))
        .catch(err => res.json(err))
}
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deletedP => res.json(deletedP))
        .catch(err => res.json(err))
}