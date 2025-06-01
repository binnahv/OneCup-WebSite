const mongoose = require('mongoose');
const queueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['waiting', 'notified', 'removed'],
        default: 'waiting'
    }
}, {
    timestamps: true
});

const Queue = mongoose.model('Queue', queueSchema);

module.exports = Queue;
