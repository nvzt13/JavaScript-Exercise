const main = document.getElementById("main");
const form = document.getElementById("search");
const input = document.getElementById("input");

let countries = [];
let searchCountries = [];

runEvents()

// run events functions
function runEvents() {
  input.addEventListener("keyup", searchCountry)

}
showCountries()
// show countries in firsly
function showCountries() {

  countriesData.forEach((data) => {
    let card =  `
    <div class = "country-wrapper">
    <img src = "${data.flag}">
    <p class = "country-name">${data.name } </p>
    <ul>
    <li>Capital: ${data.capital} </li>
    <li>Langue: ${data.langues} </li>
    <li>Population: ${data.population} </li>
    <ul>
    </div>
    `;
      
    main.innerHTML += card
  })
}


// fill in countries array
countriesData.forEach(element =>  {
countries.push(element.name)
});


// get data from user and fill in searchCountries array
function searchCountry(e) {
  
  searchCountries = [];
  main.innerHTML = "";
  let inputValue = e.target.value.toLowerCase().trim();
 
  countries.forEach((filterCountry) => {
    if(filterCountry.toLowerCase().trim().startsWith(inputValue) && 
    inputValue.length > 0) {  
      searchCountries.push(filterCountry)
    }
    else if (inputValue.length == 0){
      showCountries()
    }
  })
  getInformationCountries()
  }


// get imformation data of countries
function getInformationCountries() {
  searchCountries.forEach((count) => {
    countriesData.forEach((data) => {
      if(count.toLowerCase() == data.name.toLowerCase()) {
        // let card = new Country(data.name, data.flag, data.population,
        //    data.langue, data.capital)
        //    card.displayCountry()
        let card =  `
        <div class = "country-wrapper">
        <img src = "${data.flag}">
        <p class = "country-name">${data.name } </p>
        <ul>
        <li>Capital: ${data.capital} </li>
        <li>Langue: ${data.langues} </li>
        <li>Population: ${data.population} </li>
        <ul>
        </div>
        `;
         main.innerHTML += card
          }
        })
      })
    }
    
    
    
