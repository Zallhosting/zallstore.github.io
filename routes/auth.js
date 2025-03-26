const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const topupRoutes = require('./routes/topup');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Menggunakan route yang dipisah
app.use('/auth', authRoutes);
app.use('/topup', topupRoutes);

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
