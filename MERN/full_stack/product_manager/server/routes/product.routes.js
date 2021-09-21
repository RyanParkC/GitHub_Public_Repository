const ProductController = require('../controllers/product.controller');
module.exports = function (app) {
    app.get('/api/products/', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getProduct)
    app.post('/api/products/new', ProductController.newProduct);
    app.put('/api/products/update/:id', ProductController.updateProduct)
    app.delete('/api/products/delete/:id', ProductController.deleteProduct)
}