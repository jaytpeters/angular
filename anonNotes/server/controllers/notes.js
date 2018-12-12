const mongoose = require('mongoose');
const Note = mongoose.model('Note')


module.exports = {
    readAll: function(req,res) {
        var query = Note.find({}).sort({createdAt: -1});

        query.exec(function(err,notes) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json(notes);
            }
        });
    },
    create: function(req,res) {
        var note = new Note({"note": req.body.note});

        note.save(function(err) {
            if(err) {
                res.json({error:err.message});
            } else {
                res.json(note);
            }
        });
    }
}