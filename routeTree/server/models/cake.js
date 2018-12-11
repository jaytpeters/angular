const mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    rating: {type: Number},
    comment: {type: String}
})

var CakeSchema = new mongoose.Schema({
    baker: { type: String },
    image: { type: String },
    comments: [CommentSchema]
}, {timestamps: true});

mongoose.model('Cake', CakeSchema);
mongoose.model('Comment', CommentSchema);