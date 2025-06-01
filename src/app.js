require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Habilita CORS para qualquer origem (inclusive Live Server)
const cors = require('cors');
app.use(cors());

// Debug: mostrar valor da variável de ambiente
console.log('MONGODB_URI:', process.env.MONGODB_URI);
if (!process.env.MONGODB_URI) {
    console.error('ERRO: A variável de ambiente MONGODB_URI não está definida. Verifique seu arquivo .env e reinicie o servidor na pasta correta.');
    process.exit(1);
}
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
const queueRoutes = require('./routes/queue');
app.use('/api/reservations', reservationRoutes);
app.use('/api/queue', queueRoutes);

// Serve static HTML files (generic handler for any .html in /views)
app.get('/*.html', (req, res) => {
    const fileName = req.path.substring(1); // remove leading '/'
    res.sendFile(path.join(__dirname, '../views', fileName));
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
