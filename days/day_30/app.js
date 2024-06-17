const main = document.getElementById("main");
const form = document.getElementById("search");
const input = document.getElementById("input");

let countries = [];
let searchCountries = [];

// fill in countries array
countriesData.forEach(element =>  {
countries.push(element.name)
});

runEvents()

// run events functions
function runEvents() {
  input.addEventListener("keyup", searchCountry)
}

// get data from user and fill in searchCountries array
function searchCountry() {

  searchCountries = [];
  main.innerHTML = "";
  let inputValue = input.value.toLowerCase().trim();

  countries.forEach((filterCountry) => {
    if(filterCountry.toLowerCase().trim().startsWith(inputValue) && 
    inputValue.length > 0) {  
      searchCountries.push(filterCountry)
    }
  })
  getInformationCountries()
  }


// get imformation data of countries
function getInformationCountries() {
  searchCountries.forEach((count) => {
    countriesData.forEach((data) => {
      if(count.toLowerCase() == data.name.toLowerCase()) {
        let card = new Country(data.name, data.flag, data.population,
           data.langue, data.capital)
           card.displayCountry()
          }
        })
      })
    }
    
    
    
    // class for countries show in html
    class Country {
      constructor(countryName, flag, population, langue, capital) {
        this.countryName = countryName;
        this.flag = flag;
        this.population = population;
        this.langue = langue;
        this.capital = capital
      }
      displayCountry() {
        const element = `
        <div class = "country-wrapper">
        <img src = "${this.flag}">
        <p class = "country-name">${this.countryName} </p>
        <ul>
        <li>Capital: ${this.capital} </li>
        <li>Langue: ${this.langue} </li>
        <li>Population: ${this.population} </li>
        <ul>
        </div>
        `;
        main.innerHTML += element;
      }
    }
