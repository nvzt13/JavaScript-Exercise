// const langues = []

const countryApiUrl = 'https://restcountries.com/v2/all';


  const ctx = document.getElementById('myChart');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
    indexAxis: 'y',

      
    }
  });

fetch(countryApiUrl)
.then((response)=> response.json())
.then((data)=>{
    const langs = data.map((country) => country.languages[0].name );
    console.log(typeof langs)
    const counts = {};
    langs.forEach((lang) => {
        if (counts[lang]) {
            counts[lang]++;
        } else {
            counts[lang] = 1;
        }
    });
    console.log(typeof counts)
    const sortedLangs = Object.entries(counts).sort((a, b) => b[1] - a[1]).map(a => a[0]);
    console.log(sortedLangs.slice(0, 10));
})