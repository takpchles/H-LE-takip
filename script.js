document.getElementById('getLocationBtn').addEventListener('click', function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Konum bilgilerini bir yere göstermek için
      document.getElementById('location').innerText = `Lat: ${latitude}, Long: ${longitude}`;

      // Konum bilgilerini kullanıcı verilerine eklemek için
      const data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        followers: document.getElementById('followers').value,
        latitude: latitude,
        longitude: longitude
      };

      // Veriyi sunucuya gönderme (backend kısmı)
      fetch('http://localhost:3000/submitSurvey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => alert('Veri gönderildi!'))
      .catch(error => alert('Bir hata oluştu.'));
    }, function (error) {
      alert('Konum bilgisi alınamadı.');
    });
  } else {
    alert('Tarayıcınız konum hizmetlerini desteklemiyor.');
  }
});

document.getElementById('surveyForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Anket başarıyla gönderildi!');
});
