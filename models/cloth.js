const mongoose = require('mongoose');
const Schema = mongoose.Schema


const ClothSchema = new mongoose.Schema({
    clothname: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number},
    date: {type: Date, 
        default: Date.now, 
        get: function(value) {
            return value.toISOString().split('T')[0];
        }
    },
    // reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
    location: {type:String, required:true},
    reviews: {type:String}
    
});

module.exports = mongoose.model('Cloth', ClothSchema);