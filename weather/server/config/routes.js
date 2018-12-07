module.exports = function(app) {
    
    app.get('/cakes', function(req, res) {
        // cakes.readAll(req,res);
    })
    
    app.get('/:id', function(req, res) {
        // cakes.read(req,res);
    });
    
    app.post('/', function(req, res) {
        // cakes.create(req,res);
    });
    
    app.put('/:id', function(req, res) {
        // cakes.update(req,res);
    });
    
    app.delete('/:id', function(req, res) {
        // tasks.delete(req,res);
    });
    
    app.all("*", (req, res, next) => {
        res.sendFile(__dirname + 'index.html');
    });
}