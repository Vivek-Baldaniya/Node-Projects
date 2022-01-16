const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);