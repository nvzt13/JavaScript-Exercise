const main = document.getElementById("main");
const form = document.getElementById("search");
const input = document.getElementById("input");
const reverseButton = document.getElementById("reverseButton")
const capitalButton = document.getElementById("capitalButton")

let filteredCountries = [];
 
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
  console.log(main.className)
}


// input event listener

input.addEventListener('keyup', (e)=>{
  filteredCountries = [];
  e.preventDefault()
  let value = e.target.value.trim().toLowerCase()
   
if (value.length > 0){
countriesData.forEach((data) => {
 if(data.name.toLowerCase().trim().startsWith(value)){
      filteredCountries.push(data)
        }
})
main.className = 'filtered-countries'
  createCardAndDisplay(filteredCountries)

}
else if (value.length == 0){
main.className = 'main'
  createCardAndDisplay(countriesData)
}
})

   

function sortCountriesToCapitalName(arr) {
  return arr.sort((a, b) =>{
    if(a.capital < b.capital) return -1;
    if(a.capital > b.capital) return +1;
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
   if (input.value.length == 0){
     if(main.className == "main"){
      main.className = "main-reverse"
      createCardAndDisplay(countriesData.reverse())
    }
    else if(main.className == "main-reverse"){
      main.className = "main"
      createCardAndDisplay(countriesData.reverse())
  }
   else if (!main.className == 'main' || !main.className == 'main-reverse'){
     main.className = 'main'
     createCardAndDisplay(countriesData)
   }
 }
   else if(input.value.length > 0){
     if(main.className == 'filteredCountries'){
       main.className = 'filteredCountries-reverse'
       createCardAndDisplay(filteredCountries)
     }
   }
      break
      case'capitalButton':
         if(main.className == "main"){
          main.className = "main-capital"
           createCardAndDisplay(sortCountriesToCapitalName
            (countriesData))
        }
         else if(main.className == "main-capital"){
          main.className = "main"
           createCardAndDisplay(sortCountriesToCapitalName
            (countriesData).reverse())
      }
      break;
  }
});