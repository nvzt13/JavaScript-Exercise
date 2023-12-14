const ctx = document.getElementById('myChart');
let chartData = []; // Grafik verilerini saklamak için boş bir dizi

// Grafik oluşturuluyor
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Kırmızı', 'Mavi', 'Sarı', 'Yeşil', 'Mor', 'Turuncu'],
    datasets: [{
      label: '# Oy Sayısı',
      data: [], // Boş olarak başlıyoruz
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const countryApiUrl = 'https://restcountries.com/v2/all';

fetch(countryApiUrl)
  .then(response => response.json())
  .then(data => { 
    const arr= data.sort((a,b) =>a.area-b.area)
    
    
    arr.forEach((country, index) => {
      if (index < 5) {
        chartData.push(country.area);
      }
    });

    // Verileri güncelleyip grafik yeniden çiziliyor
    myChart.data.datasets[0].data = chartData;
    myChart.update();
  })
  .catch(err => console.log(err));