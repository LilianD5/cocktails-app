const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    average_note: {
        required: true,
        type: Number
    },
    nb_vote: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Rating', dataSchema)