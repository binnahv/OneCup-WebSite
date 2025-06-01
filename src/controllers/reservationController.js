const Reservation = require('../models/reservation');
const bcrypt = require('bcrypt');

exports.createReservation = async (req, res) => {
    try {
        // Hash da senha antes de salvar
        const { password, ...rest } = req.body;
        // Checa se já existe uma reserva para este e-mail
        const existing = await Reservation.findOne({ email: rest.email });
        if (existing) {
            return res.status(400).json({ error: 'Você já possui uma reserva existente' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const reservation = new Reservation({ ...rest, password: hashedPassword });
        await reservation.save();
        // Remover senha da resposta
        const result = reservation.toObject();
        delete result.password;
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getReservations = async (req, res) => {
    try {
        // Excluir senha do retorno
        const reservations = await Reservation.find().select('-password');
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const reservation = await Reservation.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );
        if (reservation) {
            res.json(reservation);
        } else {
            res.status(404).json({ error: 'Reservation not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const reservation = await Reservation.findByIdAndDelete(id);
        if (reservation) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Reservation not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login para edição/cancelamento de reserva
exports.loginReservation = async (req, res) => {
    try {
        const { email, password } = req.body;
        const reservation = await Reservation.findOne({ email });
        if (!reservation) {
            return res.status(404).json({ error: 'Reservation not found' });
        }
        const valid = await bcrypt.compare(password, reservation.password);
        if (!valid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const result = reservation.toObject();
        delete result.password;
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
