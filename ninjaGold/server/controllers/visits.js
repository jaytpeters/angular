const mongoose = require('mongoose');
const Visit = mongoose.model('Visit')

module.exports = {
    readAll: function(req,res) {
        console.log("Showing All Visits")
        Visit.find({}, function(err,visits) {
            if(err) {
                console.log("something went wrong");
                console.log(err);
            } else {
                res.json(visits);
            }
        });
    },
    create: function(req,res) {
        var visit = new Visit({"location": req.body.loc, "gold": req.body.gold});

        visit.save(function(err) {
            if(err) {
                console.log("something went wrong");
                console.log(err);
            } else {
                res.json(visit);
            }
        });
    },
    deleteAll: function(req,res) {
        Visit.remove({}, function(err) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json({msg:"success"});
            }
        })        
    }
}