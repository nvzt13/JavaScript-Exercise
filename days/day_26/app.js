const countryApiUrl = 'https://restcountries.com/v2/all';
const startButton = document.getElementById("start");
const anyButton = document.getElementById("any");
const sort = document.getElementById("sort");
const input = document.getElementById("filter");
const form = document.getElementById("form")
const list = document.getElementById("list")

let countries = [];
let filteredCountries = [];

addEventListener();

function addEventListener() {

  form.addEventListener("click",choseButton)
  input.addEventListener("keyup", filter);
}



// fetchging data

fetch(countryApiUrl)
 .then((response) => response.json())
 .then(async (data) => {
    await data.forEach((element) => {
      countries.push(element.name);
      
    });
   //  display(filteredCountries);
 });



 // display arr mutod in the HTML

function display(arr) {
 list.innerHTML = '';

 arr.map((ar) => {
    const li = `<li>${ar}</li>`;
    list.innerHTML += li;
 });
 }
 
//chose buttton whick filter aray

function choseButton(e){
  switch(e.target.id){


    case "start":
    e.preventDefault()
    console.log("you click start button")
    break;

    case "any":
    // filter()
    e.preventDefault()
    console.log("you click any button")
    break;

    case "sort":
    e.preventDefault()
    console.log("you click sort button")
    break;
  }
}
function filter(){
   let inputValue = input.value
   if(inputValue.length !==0){
    countries.forEach((country)=>{
       if(country.startsWith(inputValue)){
       filteredCountries.push(country)

      }else{

        console.log("Aradığınız ülke bulunamadı")
      }
    })
  }else{
    // console.log("Lütfen bir değer girin")
    list.innerHTML=""
  }
  console.log(filteredCountries)
  display(filteredCountries)
}
 
// filter country name function

// function filter(e) {
//  let filterValue = e.target.value;
//  let filter = [];

//  if (filterValue.length > 0) {
//     countries.forEach((country) => {
//       if (country.toLowerCase().includes(filterValue.toLowerCase())) {
//         filter.push(country);
//       }
//     });
//     filteredCountries = filter;
//  } else {
//    const ul = document.querySelector('#list');
//    ul.innerHTML = '';
//  }

//  display(filteredCountries);
// }