const main = document.getElementById("main");
const form = document.getElementById("search");
const input = document.getElementById("input")

let countries = []

runEvents()

function runEvents(){
  input.addEventListener("keyup",searchCountry)
}

countriesData.forEach(element => {
  countries.push(element.name)
})


function searchCountry(){
  let inputValue = input.value.toLowerCase()
  countries.forEach((country)=>{
    if(country.toLowerCase().startsWith(inputValue)){
      console.log(country)
    }
  })
}




















// let searchCountryInformation = []

// // ülkelerimiz için bir sınıf
// class Country {
//   constructor(countryName, flag, population, langue, capital) {
//     this.countryName = countryName
//     this.flag = flag
//     this.population = population
//     this.langue = langue
//     this.capital = capital
//   }
//   displayCountry() {
//     const element =
//     `<div class="country-wrapper">
//       <img src="${this.flag}" alt="">
//       <p class="country-name">${this.countryName}</p>
//       <ul>
//           <li>Capital: ${ this.capital}</li>
//           <li>Langue: ${this.langue}</li>
//           <li>Population: ${ this.population}</li>
//       </ul>
//     </div>
//    `
//    main.innerHTML=""
//     main.innerHTML+=element
    
//   }
// }

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
