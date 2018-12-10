const mongoose = require('mongoose');
const Author = mongoose.model('Author')

module.exports = {
    readAll: function(req,res) {
        Author.find({}, function(err,authors) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json(authors);
            }
        });
    },
    read: function(req,res) {
        var id = req.params.id;
        Author.findOne({_id:Object(id)}, function(err,author) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json(author);
            }
        })
    },
    create: function(req,res) {
        var author = new Author({"name": req.body.author});

        author.save(function(err) {
            if(err) {
                res.json({error:err.message});
            } else {
                res.json(author);
            }
        });
    },
    delete: function(req,res) {
        var id = req.params.id;
        Author.findByIdAndRemove(Object(id), function(err) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json({msg:"Success"});
            }
        })        
    },
    update: function(req,res) {
        var id = req.params.id;
        var author = req.body.name;

        Author.findByIdAndUpdate({"_id":Object(id)}, {"name": author}, {runValidators: true}, function(err) {
            if(err) {
                res.json({error:err.message});
            } else {
                res.json({msg:"Success"});
            }
        })
    }
}