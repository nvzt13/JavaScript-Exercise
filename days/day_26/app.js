const countryApiUrl = 'https://restcountries.com/v2/all';
let countries= []


fetch(countryApiUrl)
.then((response)=>response.json())
.then(async (data)=>{
  await data.forEach(element => {
    countries.push(element.name)
  })
display(countries)
})


function display(arr){
  arr.map((ar)=>{
    const li= `<li>${ar}</li>`
    document.querySelector('#list').innerHTML += li
  })
}