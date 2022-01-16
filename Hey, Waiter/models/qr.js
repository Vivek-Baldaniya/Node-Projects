const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const qrSchema = new Schema({
    hotelId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    qr_type: {
        type: String
            // required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('QrGenerator', qrSchema);