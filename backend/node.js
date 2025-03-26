const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let userData = {}; // Penyimpanan sementara untuk akun pengguna

// Endpoint untuk login tanpa database
app.post('/login', (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ error: 'Username diperlukan' });
    }
    
    if (!userData[username]) {
        userData[username] = { bindStatus: 'off', loginStatus: 'active' };
    }
    res.json({ message: 'Login berhasil', data: userData[username] });
});

// Endpoint untuk update status bind
app.post('/update-bind', (req, res) => {
    const { username, bindStatus } = req.body;
    if (!userData[username]) {
        return res.status(404).json({ error: 'User tidak ditemukan' });
    }
    userData[username].bindStatus = bindStatus;
    res.json({ message: 'Status bind diperbarui', data: userData[username] });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
