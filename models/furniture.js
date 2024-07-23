const mongoose = require('mongoose')


const furnitureSchema = new mongoose.Schema({
    furniturename: {type: String, require: true},
    price:{type: Number, require: true},
    location: {type: String, require:true},
    date: {type: Date, 
        default: Date.now, 
        get: function(value) {
            return value.toISOString().split('T')[0];
        }
    }
})

module.exports = mongoose.model('Furniture', furnitureSchema)