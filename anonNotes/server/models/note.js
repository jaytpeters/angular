const mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    note: { type: String,
        validate: {
            validator: function(v) {
                return v.length > 2;
            },
            message: props => `${props.value} is less than 3 characters`
        },
        required: [true, "You must enter a note"]
     }
}, {timestamps: true});

mongoose.model('Note', NoteSchema);