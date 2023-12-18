const main = document.getElementById("main");
const form = document.getElementById("search");

let searchCountryInformation = []
updateSearchCountryInformation()

function updateSearchCountryInformation(){
  searchCountryInformation=[]
}
// ülkelerimiz için bir sınıf
class Country {
  constructor(countryName, flag, population, langue, capital) {
     this.countryName = countryName
     this.flag = flag
     this.population = population
     this.langue = langue
     this.capital = capital
  }
  displayCountry() {
    const element =
      `<div class="country-wrapper">
      <img src="${this.flag}" alt="">
      <p class="country-name">${this.countryName}</p>
      <ul>
          <li>Capital: ${ this.capital}</li>
          <li>Langue: ${this.langue}</li>
          <li>Population: ${ this.population}</li>
      </ul>
    </div>
   `
   main.innerHTML+=element
   
  }
}

addEventListener();
function addEventListener() {
  form.addEventListener("submit", getInformation);
  form[0].addEventListener("click",(e)=> e.target.value="")
}

// kullanıcıdan veriyi alma
function getInformation(e) {
  e.preventDefault();
  let index;
  let searchCountry = e.target[0].value.toLowerCase();
  const countries = [];
  const toLowerCaseCountry = [];

  // ülke dizisini doldur
  countriesData.map((country) => {
      countries.push(country.name);
  });

  // ülke dizisini küçük harfe çevir
  countries.map((country) => {
      toLowerCaseCountry.push(country.toLowerCase());
  });

  // İndeksini bul
  index = toLowerCaseCountry.indexOf(searchCountry);

  // Input içini temizle

  // getData çağırma
  getData(index);
}

function getData(num){
  if(num<countriesData.length){
    searchCountryInformation.push(countriesData[num].name)
    searchCountryInformation.push(countriesData[num].flag)
    searchCountryInformation.push(countriesData[num].population)
    searchCountryInformation.push(countriesData[num].languages)
    searchCountryInformation.push(countriesData[num].capital)
  }
  // console.log(searchCountryInformation)
  const country = new Country(searchCountryInformation[0],searchCountryInformation[1],searchCountryInformation[2],searchCountryInformation[3],searchCountryInformation[4])
  country.displayCountry()
  updateSearchCountryInformation()
  return searchCountryInformation
}


