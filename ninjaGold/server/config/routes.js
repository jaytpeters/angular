const visits = require('../controllers/visits.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(__dirname + 'index.html');
    });

    app.get('/visits', function(req, res) {
        visits.readAll(req,res);
    })

    app.post('/visit', function(req, res) {
        visits.create(req,res);
    });

    app.delete('/', function(req, res) {
        visits.deleteAll(req,res);
    });

}