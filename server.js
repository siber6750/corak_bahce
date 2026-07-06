const express = require('express');
const path = require('path');
const app = express();

// Oyunun dosyalarını serve et
app.use(express.static(path.join(__dirname)));

// Ana sayfa açıldığında index.html'i göster
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 3000 portunda sunucuyu başlat
const PORT = 3000;
app.listen(PORT, () => {
    console.log('====================================');
    console.log('ÇORAK Sunucusu Başlatıldı!');
    console.log('Oyunu oynamak için tarayıcını aç ve şu adrese git:');
    console.log(`👉 http://localhost:${PORT}`);
    console.log('====================================');
});