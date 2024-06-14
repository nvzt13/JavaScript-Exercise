  # Day 26  - Mini Project 2
 
## [Exercise:Solutions](#exercise-solutions)

 #### [Home](../README.md) | [<< Day 25](../day_25/25_day.md) | [Day 27 >>](../day_27/27_day_portfolio.md)

### Exercise Level 1

1. Visualize the countries array as follows
<img src="day26_miniproject2.png">


### Exercise Level 1
 ```js
 //app.js
 
 const countryApiUrl = 'https://restcountries.com/v2/all';
const startButton = document.getElementById("start");
const nyButton = document.getElementById("any");
const sort = document.getElementById("sort");
const input = document.getElementById("filter");

let countries = [];
let filteredCountries = [];

addEventListener();

function addEventListener() {
 input.addEventListener("keydown", filter);
}

// fetchging data

fetch(countryApiUrl)
 .then((response) => response.json())
 .then(async (data) => {
    await data.forEach((element) => {
      countries.push(element.name);
      filteredCountries.push(element.name);
    });
   //  display(filteredCountries);
 });



 // display arr mutod in the HTML

function display(arr) {
 const countryWrapper = document.querySelector('#list');
 countryWrapper.innerHTML = '';

 arr.map((ar) => {
    const li = `<li>${ar}</li>`;
    countryWrapper.innerHTML += li;
 });
}

// filter country name function

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
   const ul = document.querySelector('#list');
   ul.innerHTML = '';
 }

 display(filteredCountries);
}


 ```