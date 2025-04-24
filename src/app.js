const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// View engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Routes
const reservationRoutes = require('./routes/reservations');
app.use('/api/reservations', reservationRoutes);

// Serve static HTML files
const htmlFiles = [
    '/',
    '/ReservarMesa.html',
    '/FilaEspera.html',
    '/EditarReserva.html',
    '/reserva-confirmada.html'
];

htmlFiles.forEach(file => {
    app.get(file, (req, res) => {
        const filePath = file === '/' ? 'index.html' : file.substring(1);
        res.sendFile(path.join(__dirname, '../views', filePath));
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Open http://localhost:${port} in your browser`);
});
