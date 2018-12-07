const mongoose = require('mongoose');
const Cake = mongoose.model('Cake')
const Comment = mongoose.model('Comment')

module.exports = {
    readAll: function(req,res) {
        Cake.find({}, function(err,cakes) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json(cakes);
            }
        });
    },
    read: function(req,res) {
        var id = req.params.id;
        Cake.findOne({_id:Object(id)}, function(err,cake) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json(cake);
            }
        })
    },
    create: function(req,res) {
        var cake = new Cake({"baker": req.body.baker, "image": req.body.image, "comments": []});

        cake.save(function(err) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json(cake);
            }
        });
    },
    delete: function(req,res) {
        var id = req.params.id;

        Cake.findByIdAndRemove(Object(id), function(err) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json({msg:"Success"});
            }
        })        
    },
    update: function(req,res) {
        var id = req.params.id;
        var rating = req.body.rating;
        var comment = req.body.comment;

        Cake.findByIdAndUpdate({"_id":Object(id)}, {$push: {comments: {"rating": rating, "comment": comment}}}, function(err) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json({msg:"Success"});
            }
        })
    }
}