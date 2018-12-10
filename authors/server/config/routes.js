const authors = require('../controllers/authors.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(__dirname + 'index.html');
    });

    app.get('/authors', function(req, res) {
        authors.readAll(req,res);
    })

    app.get('/:id', function(req, res) {
        authors.read(req,res);
    });

    app.post('/new', function(req, res) {
        authors.create(req,res);
    });

    app.put('/:id', function(req, res) {
        authors.update(req,res);
    });

    app.delete('/:id', function(req, res) {
        authors.delete(req,res);
    });

}