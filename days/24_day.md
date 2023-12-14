```js
const ctxx = document.getElementById('myChart2');
let chartData = []; // Grafik verilerini saklamak için boş bir dizi
const countryName = []
let Word=0
// Grafik oluşturuluyor
const myChart = new Chart(ctxx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: '# Country Poplulation',
      data: ["word"], // Boş olarak başlıyoruz
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
  }
});

const countryApiUrl = 'https://restcountries.com/v2/all';

fetch(countryApiUrl)
  .then(response => response.json())
  .then(data => { 
    console.log(data)
    const arr= data.sort((a,b) =>b.population-a.population)
    arr.forEach((country, index) => {
        Word += country.population
        if (index < 10) {
        chartData.push(country.population);
        countryName.push(country.name)
      }
    });
    chartData.unshift(Word)
    countryName.unshift("word")
    console.log(Word)
    // Verileri güncelleyip grafik yeniden çiziliyor
    myChart.data.datasets[0].data = chartData;
    myChart.data.labels=countryName
    myChart.update();
  })
  .catch(err => console.log(err));
  ```