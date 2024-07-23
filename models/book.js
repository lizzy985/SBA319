const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BookSchema = new mongoose.Schema({
    bookname: { type: String, required: true },
    price: {type:Number, required: true },
    date: {type: Date, default: Date.now,  get: function(value) {
        return value.toISOString().split('T')[0];
    }},
    location: {type: String, required: true},
    comment: {type: String} 
});

module.exports = mongoose.model('Review', BookSchema);