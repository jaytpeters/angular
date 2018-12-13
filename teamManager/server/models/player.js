const mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,
        validate: {
            validator: function(v) {
                return v.length > 1;
            },
            message: props => `${props.value} must be at least 2 characters in length.`
        },
        required: [true, "You must enter a name for the player"]
     },
     position: String,
     game1: String,
     game2: String,
     game3: String
}, {timestamps: true});

mongoose.model('Player', PlayerSchema);