const countryApiUrl = 'https://restcountries.com/v2/all';
const startButton = document.getElementById("start");
const nyButton = document.getElementById("any");
const sort = document.getElementById("sort");
const input = document.getElementById("filter");
const form = document.getElementById("form")

let countries = [];
let filteredCountries = [];

addEventListener();

function addEventListener() {
  form.addEventListener("click",choseButton)

  
  input.addEventListener("keydown", filter);
}

//chose buttton whick filter aray

function choseButton(e){
  switch(e.target.id){
    
    case "form": 
    e.preventDefault()
    console.log("you click form")
    break;
    
    case "start": 
    e.preventDefault()
    console.log("you click start button")
    break;
    
    case "any": 
    e.preventDefault()
    console.log("you click any button")
    break;
    
    case "sort": 
    e.preventDefault()
    console.log("you click sory button")
    break;    
  }
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

