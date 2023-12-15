const countryApiUrl = 'https://restcountries.com/v2/all';

fetch(countryApiUrl)
.then((response)=>response.json())
.then((data)=>{
  data.forEach((country)=>{
    names.push(country.name)
    console.log(names)
  })
  
})
