const mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    image: { type: String },
    name: { 
        type: String, 
        validate: {
            validator: function(v) {
                return v.length > 3;
            },
            message: props => `${props.value} is less than 4 characgter.`
        },
        required: [true, "You must enter a title for the product"]
    },
    price: {type: Number, required: [true, "You must enter a price for the product"] }
}, {timestamps: true});

mongoose.model('Product', ProductSchema);