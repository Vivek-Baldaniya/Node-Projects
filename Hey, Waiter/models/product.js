const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        require: true
    },
    imageUrl: {
        type: String
    },
    rating: {
        type: Number
    },
    type: {
        type: String
    },
    creator: {
        type: Schema.Type.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);