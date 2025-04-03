const express = require('express');
const cors = require('cors');
const { connectDB, sequelize } = require('./db/db');
const transactionsRoutes = require('./routes/transactions');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion à la base de données
connectDB();

// Synchronisation des tables MySQL
sequelize.sync({ alter: true })
    .then(() => console.log('✅ Tables synchronized'))
    .catch(err => console.error('❌ Error syncing tables:', err));

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', transactionsRoutes);

// Démarrer le serveur
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
