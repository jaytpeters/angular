const mongoose = require('mongoose');
const Task = mongoose.model('Task')

module.exports = {
    readAll: function(req,res) {
        Task.find({}, function(err,tasks) {
            if(err) {
                console.log("something went wrong");
                console.log(err);
            } else {
                res.json(tasks);
            }
        });
    },
    read: function(req,res) {
        var id = req.params.id;
        Task.findOne({_id:Object(id)}, function(err,task) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json(task);
            }
        })
    },
    create: function(req,res) {
        var task = new Task({"title": req.body.title, "description": req.body.description, "completed": req.body.completed});

        console.log(task);
        task.save(function(err) {
            if(err) {
                console.log("something went wrong");
                console.log(err);
            } else {
                res.json(task);
            }
        });
    },
    delete: function(req,res) {
        var id = req.params.id;

        Task.findByIdAndRemove(Object(id), function(err) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.redirect('/');
            }
        })        
    },
    update: function(req,res) {
        var id = req.params.id;

        Task.findByIdAndUpdate({"_id":Object(id)}, {"title":req.body.title, "description":req.body.description}, function(err) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json({"title":req.body.title, "description":req.body.description});
            }
        })
    }
}