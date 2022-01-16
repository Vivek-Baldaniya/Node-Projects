const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    todos: [{
        type: Schema.Types.ObjectId,
        ref: 'Todos'
    }]
}, { timestamps: true });

exports.module = mongoose.model('User', userSchema);