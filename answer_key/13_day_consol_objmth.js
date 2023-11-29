//----------------------------day13_level_1 1.exercise-------------------------\\
// # Display the countries array as a table

const countries = ['Norway', 'Sweden','England','Iceland']
console.table(countries)

//----------------------------day13_level_1 2.exercise-------------------------\\
// # Display the countries object as a table



const countries ={
    countri: 'Germany',
    popolation: 564654,
    lamgue: 'German'
}
console.table(countries)
    
//----------------------------day13_level_1 3.exercise-------------------------\\
// # Use console.group() to group logs

const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('names')
console.log(names)
console.groupEnd()

console.group('countries')
console.log(countries)
console.groupEnd()

console.group('user')
console.log(user)
console.groupEnd()

//? exercise 1

console.assert(10>2*10)

//? exercise 2

console.warn("this is a warning message")

//? exercise 3

console.error('This is a error message')

!  exercise 1
Create an array of 1000000 elements
let arr = [];
for (let i = 0; i < 1000000; i++) {
  arr.push(i);
}
