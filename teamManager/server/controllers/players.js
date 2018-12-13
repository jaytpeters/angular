const mongoose = require('mongoose');
const Player = mongoose.model('Player')

module.exports = {
    readAll: function(req,res) {
        Player.find({}, function(err,players) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json(players);
            }
        });
    },
    create: function(req,res) {
        var player = new Player({"name": req.body.name, "position": req.body.position, "game1":"undecided", "game2":"undecided", "game3":"undecided"});

        player.save(function(err) {
            if(err) {
                res.json({error:err.message});
            } else {
                res.json(player);
            }
        });
    },
    delete: function(req,res) {
        var id = req.params.id;
        Player.findByIdAndRemove(Object(id), function(err) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json({msg:"Success"});
            }
        })        
    },
    update: function(req,res) {
        var id = req.params.id;
        var game1 = req.body.game1;
        var game2 = req.body.game2;
        var game3 = req.body.game3;

        Player.findByIdAndUpdate({"_id":Object(id)}, {"game1": game1, "game2": game2, "game3": game3}, function(err) {
            if(err) {
                res.json({error:err.message});
            } else {
                res.json({msg:"Success"});
            }
        })
    }
}