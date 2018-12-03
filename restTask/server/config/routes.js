const tasks = require('../controllers/tasks.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(__dirname + 'index.html');
    });

    app.get('/:id', function(req, res) {
        tasks.read(req,res);
    });

    app.post('/', function(req, res) {
        tasks.create(req,res);
    });

    app.put('/:id', function(req, res) {
        tasks.update(req,res);
    });

    app.delete('/:id', function(req, res) {
        tasks.delete(req,res);
    });

}