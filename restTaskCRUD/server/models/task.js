const mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String }
}, {timestamps: true});

mongoose.model('Task', TaskSchema);