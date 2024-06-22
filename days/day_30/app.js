const main = document.getElementById("main");
const form = document.getElementById("search");
const input = document.getElementById("input");
const reverseButton = document.getElementById("reverseButton")
const capitalButton = document.getElementById("capitalButton")

let filteredWord = '';
let filteredCountries = [];
let clickButton = false;
 
createCardAndDisplay(countriesData)

function createCardAndDisplay(arr){
  let cards = [];
  arr.forEach((data) => {
    let card =  `
        <div class = "country-wrapper">
        <img src = "${data.flag}">
        <p class = "country-name">${data.name } </p>
        <ul>
        <li>Capital: ${data.capital} </li>
        <li>Langue: ${data.languages} </li>
        <li>Population: ${data.population} </li>
        <ul>
        </div>
        `; 
        cards.push(card)
  })
  main.innerHTML = ''
  main.innerHTML = cards
}


// input event listener

input.addEventListener('keyup', (e)=>{
  e.preventDefault()
  let value = e.target.value.trim().toLowerCase()
   filteredWord = value
   if(filteredWord.length > 0){
      createCardAndDisplay(gettingFilteredWordData(filteredWord))
   }
   else if(filteredWord.length == 0){
     createCardAndDisplay(countriesData)
   }
  
})

function gettingFilteredWordData(string){
  filteredCountries = [];
  countriesData.forEach((data) => {
    if(data.name.toLowerCase().trim().startsWith(string)){
  
      filteredCountries.push(data)
    }
  })
  return filteredCountries
}
reverseArrays(countriesData)

function reverseArrays(arr){
  if(arr == countriesData){
   return countriesData.reverse()
  }
  else if(arr == filteredCountries){
    return filteredCountries.reverse()
  }
}

function sortCountriesToCapitalName(arr) {
  return arr.sort((a, b) =>{
    if(a.capital < b.capital) return -1;
    if(a.capital > b.capital) return +1;
    return 0;
  });
}
function sortCountries(arr) {
  return arr.sort((a, b) =>{
    if(a.capital < b.name) return -1;
    if(a.capital > b.name) return +1;
    return 0;
  });
}

// buttons click events

form.addEventListener('click', (e) => {
  e.preventDefault()
  let element = e.target;
  if(!element.matches('button')) return;
  switch(element.id){
    case'reverseButton':
      if(input.value.length > 0){
        createCardAndDisplay(filteredCountries.reverse())
        }
        else if(input.value.length == 0){
          createCardAndDisplay(countriesData.reverse())
      }
      break
      case'capitalButton':
         if(input.value.length > 0 && clickButton ==false ){
           createCardAndDisplay(sortCountriesToCapitalName(filteredCountries))
           clickButton = true
   
           console.log(filteredCountries)
        }
         else if(input.value.length >0 && clickButton == true){
           createCardAndDisplay(sortCountries(filteredCountries))
          console.log(filteredCountries)
          clickButton = false;
      }
      break;
  }
});