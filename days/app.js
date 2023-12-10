const countries ={'Finland':'Sweden', 'Denmark': 'Norway'}


function getFirstTenCountries() {
  return Object.values(countries)
    .slice(0, 10)
    .map(country => country.name);
}

console.log(getFirstTenCountries());
