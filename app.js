const demo = document.getElementById("demo");
const form = document.getElementById("search");

let searchCountryInformation = []
updateSearchCountryInformation()

function updateSearchCountryInformation(){
  searchCountryInformation=[]
}
class Country {
  constructor(countryName, flag, population, langue, capital) {
     this.countryName = countryName
     this.flag = flag
     this.population = population
     this.langue = langue
     this.capital = capital
  }
  displayCountry() {
     console.log(
       this.countryName,
       this.flag,
       this.capital,
       this.population,
       this.langue
     );
  }
}

addEventListener();
function addEventListener() {
  form.addEventListener("submit", getInformation);
}

// kullanıcıdan veriyi alma
function getInformation(e) {
    e.preventDefault();
    let index;
    const searchCountry = e.target[0].value.toLowerCase();
    const countries = [];
    const toLowerCaseCountry=[]
    // ülke dizisini  doldur
    countriesData.map((country) => {
       countries.push(country.name);
    });
// ülke dizisini küçük harfe çevir
        countries.map((country)=>{
            toLowerCaseCountry.push(country.toLowerCase())
            // console.log(toLowerCaseCountry)
            if(toLowerCaseCountry.includes(searchCountry)){
                 index=toLowerCaseCountry.indexOf(searchCountry)
                }
              }
              
              )
              
            getData(index)
}

function getData(num){
  if(num<countriesData.length){
    searchCountryInformation.push(countriesData[num].name)
    searchCountryInformation.push(countriesData[num].population)
    searchCountryInformation.push(countriesData[num].capital)
    searchCountryInformation.push(countriesData[num].languages)
    searchCountryInformation.push(countriesData[num].flag)
  }
  // console.log(searchCountryInformation)
  const country = new Country(searchCountryInformation[0],searchCountryInformation[1],searchCountryInformation[2],searchCountryInformation[3],searchCountryInformation[4])
  country.displayCountry()
  updateSearchCountryInformation()
  return searchCountryInformation
}


