const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todosSchema = new Schema({
    todo: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Todos', todosSchema);