const mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        validate: {
            validator: function(v) {
                return v.length > 2;
            },
            message: props => `${props.value} is less than 3 characters`
        },
        required: [true, "You must enter a name for the author"]
     }
}, {timestamps: true});

mongoose.model('Author', AuthorSchema);