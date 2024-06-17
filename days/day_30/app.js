const main = document.getElementById("main");
const form = document.getElementById("search");
const input = document.getElementById("input");

let countries = [];

countriesData.forEach(element =>  {
countries.push(element.name)
});

runEvents()

// run events functions
function runEvents() {
  input.addEventListener("keyup", searchCountry)
}

// get data from user and search in countries array
function searchCountry() {
  let inputValue = input.value.toLowerCase().trim();
  let searchCountries = [];

  countries.forEach((filterCountry) => {
    if(filterCountry.toLowerCase().trim().startsWith(inputValue) && 
    inputValue.length > 0) {  
       searchCountries.push(filterCountry)
    }
  })
  return searchCountries;
}

console.log(searchCountry())




// getInformation()
// // get imformation data of countries
// function getInformation() {
//   let filteredCountries = searchCountry()
//   filteredCountries.forEach((country) => {
//     console.log(country)
//   })
// }





















// class for countries
class Country {
  constructor(name, flag, population, langue, capital) {
    this.name = name;
    this.flag = flag;
    this.population = population;
    this.langue = langue;
    this.capital = capital
  }
  displayCountry() {
    const element = `
    <div class = "country-wrapper">
    <img src = "${this.flag}>
    <p class = "country-name"> </p>
    <ul>
    <li>Capital: ${this.capital} </li>
    <li>Langue: ${this.langue} </li>
    <li>Population: ${this.population} </li>
    <ul>
    </div>
    `;
    main.innerHTML += element
  }
}


// addEventListener();
// function addEventListener() {
//   form.addEventListener("submit", getInformation);
//   form[0].addEventListener("click",(e)=> e.target.value="")
// }

// // kullanıcıdan veriyi alma

// function getInformation(e) {
//   e.preventDefault();
//   let index;
//   let searchCountry = e.target[0].value.toLowerCase();
//   const countries = [];
//   const toLowerCaseCountry = [];
  
//   countriesData.map((country) => {
//     countries.push(country.name);
//   });
  
//   countries.map((country) => {
//     toLowerCaseCountry.push(country.toLowerCase());
//   });
  
//   index = toLowerCaseCountry.indexOf(searchCountry);
  
//   getData(index);
//   console.log(index)
// }

// // get data function

// function getData(num){
//   if(num<countriesData.length){
//     searchCountryInformation.push(countriesData[num].name)
//     searchCountryInformation.push(countriesData[num].flag)
//     searchCountryInformation.push(countriesData[num].population)
//     searchCountryInformation.push(countriesData[num].languages)
//     searchCountryInformation.push(countriesData[num].capital)
//   }
//   // console.log(searchCountryInformation)
//   const country = new Country(searchCountryInformation[0],searchCountryInformation[1],searchCountryInformation[2],searchCountryInformation[3],searchCountryInformation[4])
//   country.displayCountry()
//   return searchCountryInformation
// }
