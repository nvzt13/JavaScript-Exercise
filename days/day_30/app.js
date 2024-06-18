const main = document.getElementById("main");
const form = document.getElementById("search");
const input = document.getElementById("input");
const reverseButton = document.getElementById("reverseButton")
const capitalButton = document.getElementById("capitalButton")

class Country {
  constructor (countryName, flag, capital, languages, population){
    this.countryName = countryName;
    this.flag = flag;
    this.capital = capital;
    this.languages = languages;
    this.population = population
  }
  createCard (arr) {
    let card =  `
        <div class = "country-wrapper">
        <img src = "${this.flag}">
        <p class = "country-name">${this.countryName } </p>
        <ul>
        <li>Capital: ${this.capital} </li>
        <li>Langue: ${this.languages} </li>
        <li>Population: ${this.population} </li>
        <ul>
        </div>
        `;        
        arr.push(card)
      }
}


let filteredCountries = [];
let cards = [];
let capital = [];

showCountries()
runEvents()

// run events functions
function runEvents() {
  input.addEventListener("keyup", searchCountry)
  reverseButton.addEventListener("click", reverseCountries)
  capitalButton.addEventListener("click", reverseCountriesArrayCapitalName)
}

// show countries in firsly
function showCountries() {
  if (input.value.length == 0 ) {
    countriesData.forEach((data) => {
      let card = new Country(data.name, data.flag, data.capital, data.languages, data.population)
      card.createCard(cards)
        // capital.push(data.capital)
      })
      main.innerHTML = cards
    }
}


// get data from user and fill in searchCountries array
function searchCountry(e) {
  
  filteredCountries = [];
  main.innerHTML = "";
  let inputValue = e.target.value.toLowerCase().trim();
 
  countriesData.forEach((data) => {
    if(data.name.toLowerCase().trim().startsWith(inputValue) && 
    inputValue.length > 0) {  
      let card = new Country (data.name, data.flag,
         data.capital, data.languages, data.p)
         card.createCard(filteredCountries)
    }  
    main.innerHTML = "";
    main.innerHTML = filteredCountries
    
  })  
  if (inputValue.length == 0){
    showCountries()
  }  
  
  }
  
// reverse countries array on click name button
function reverseCountries(e) {
  
    e.preventDefault()
    main.innerHTML = "" 
    
    if (input.value == 0){
      main.innerHTML = cards.reverse()
    }
    else {
      main.innerHTML = filteredCountries.reverse()
    }
  }
function reverseCountriesArrayCapitalName (e) {
  e.preventDefault()
  main.innerHTML = "";
  if(input.value.length == 0 ) {
    cards.forEach((card)=>{

      console.log(card.className())
    })
  }
}
