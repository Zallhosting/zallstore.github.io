const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, '../data/users.json');

// Membaca data user dari file JSON
const readUsers = () => {
    if (!fs.existsSync(usersFile)) return {};
    const data = fs.readFileSync(usersFile);
    return JSON.parse(data);
};

// Menulis data user ke file JSON
const writeUsers = (data) => {
    fs.writeFileSync(usersFile, JSON.stringify(data, null, 2));
};

// Endpoint login
router.post('/login', (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ error: 'Username diperlukan' });
    }
    
    let users = readUsers();
    if (!users[username]) {
        users[username] = { bindStatus: 'off', loginStatus: 'active' };
        writeUsers(users);
    }
    res.json({ message: 'Login berhasil', data: users[username] });
});

// Endpoint update status bind
router.post('/update-bind', (req, res) => {
    const { username, bindStatus } = req.body;
    let users = readUsers();
    
    if (!users[username]) {
        return res.status(404).json({ error: 'User tidak ditemukan' });
    }
    users[username].bindStatus = bindStatus;
    writeUsers(users);
    
    res.json({ message: 'Status bind diperbarui', data: users[username] });
});

module.exports = router;
