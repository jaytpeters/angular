const notes = require('../controllers/notes.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(__dirname + 'index.html');
    });

    app.get('/notes', function(req, res) {
        notes.readAll(req,res);
    })

    app.post('/', function(req, res) {
        notes.create(req,res);
    });
}