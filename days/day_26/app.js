const countryApiUrl = 'https://restcountries.com/v2/all';
const startButton = document.getElementById("start");
const nyButton = document.getElementById("any");
const sort = document.getElementById("sort");
const input = document.getElementById("filter");

let countries = [];
let filteredCountries = [];

addEventListener();

function addEventListener() {
 input.addEventListener("keyup", filter);
}

fetch(countryApiUrl)
 .then((response) => response.json())
 .then(async (data) => {
    await data.forEach((element) => {
      countries.push(element.name);
      filteredCountries.push(element.name);
    });
    // display(filteredCountries);
 });

console.log(countries);

function display(arr) {
 const ul = document.querySelector('#list');
 ul.innerHTML = '';

 arr.map((ar) => {
    const li = `<li>${ar}</li>`;
    ul.innerHTML += li;
 });
}

function filter(e) {
 let filterValue = e.target.value;
 let filter = [];

 if (filterValue.length > 0) {
    countries.forEach((country) => {
      if (country.toLowerCase().includes(filterValue.toLowerCase())) {
        filter.push(country);
      }
    });
    filteredCountries = filter;
 } else {
    filteredCountries = countries;
 }

 display(filteredCountries);
}

// // Yeni işlev: Tüm ülkeleri göstermek için
function displayAll() {
 display(filteredCountries);
}

// // Varsayılan olarak tüm ülkeleri göster
displayAll();