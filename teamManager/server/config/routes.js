const players = require('../controllers/players.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(__dirname + 'index.html');
    });

    app.get('/players', function(req, res) {
        players.readAll(req,res);
    })

    app.post('/', function(req, res) {
        players.create(req,res);
    });

    app.put('/:id', function(req, res) {
        players.update(req,res);
    });

    app.delete('/:id', function(req, res) {
        players.delete(req,res);
    });

}