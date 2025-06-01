const Queue = require('../models/queue');

exports.addToQueue = async (req, res) => {
    try {
        const queueEntry = new Queue(req.body);
        await queueEntry.save();
        res.status(201).json(queueEntry);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getQueue = async (req, res) => {
    try {
        const queue = await Queue.find().sort({ createdAt: 1 });
        res.json(queue);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.removeFromQueue = async (req, res) => {
    try {
        const { id } = req.params;
        const queueEntry = await Queue.findByIdAndDelete(id);
        if (queueEntry) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Queue entry not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
