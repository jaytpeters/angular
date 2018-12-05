const mongoose = require('mongoose');

var VisitSchema = new mongoose.Schema({
    gold: { type: Number },
    location: { type: String }
}, {timestamps: true});

mongoose.model('Visit', VisitSchema);