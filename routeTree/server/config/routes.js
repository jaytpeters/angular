const cakes = require('../controllers/cakes.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(__dirname + 'index.html');
    });

    app.get('/cakes', function(req, res) {
        cakes.readAll(req,res);
    })

    app.get('/:id', function(req, res) {
        cakes.read(req,res);
    });

    app.post('/', function(req, res) {
        cakes.create(req,res);
    });

    app.put('/:id', function(req, res) {
        cakes.update(req,res);
    });

    app.delete('/:id', function(req, res) {
        tasks.delete(req,res);
    });

}