const mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    completed: { type: Boolean }
}, {timestamps: true});

mongoose.model('Task', TaskSchema);