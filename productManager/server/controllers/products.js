const mongoose = require('mongoose');
const Product = mongoose.model('Product')

module.exports = {
    readAll: function(req,res) {
        Product.find({}, function(err,products) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json(products);
            }
        });
    },
    read: function(req,res) {
        var id = req.params.id;
        Product.findOne({_id:Object(id)}, function(err,product) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json(product);
            }
        })
    },
    create: function(req,res) {
        var product = new Product({"image": req.body.image, "name": req.body.name, "price": req.body.price});

        product.save(function(err) {
            if(err) {
                res.json({error:err.message});
            } else {
                res.json(product);
            }
        });
    },
    delete: function(req,res) {
        var id = req.params.id;

        Product.findByIdAndRemove(Object(id), function(err) {
            if(err) {
                console.log("something went wrong");
            } else {
                res.json({msg:"Success"});
            }
        })        
    },
    update: function(req,res) {
        var id = req.params.id;
        var image = req.body.image;
        var name = req.body.name;
        var price = req.body.price;

        Product.findByIdAndUpdate({"_id":Object(id)}, { "name": name, "image": image, "price": price}, {runValidators: true}, function(err) {
            if(err) {
                res.json({error:err.message});
            } else {
                res.json({msg:"Success"});
            }
        })
    }
}