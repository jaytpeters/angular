const products = require('../controllers/products.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(__dirname + 'index.html');
    });

    app.get('/products', function(req, res) {
        products.readAll(req,res);
    })

    app.get('/:id', function(req, res) {
        products.read(req,res);
    });

    app.post('/', function(req, res) {
        products.create(req,res);
    });

    app.put('/:id', function(req, res) {
        products.update(req,res);
    });

    app.delete('/:id', function(req, res) {
        products.delete(req,res);
    });

}