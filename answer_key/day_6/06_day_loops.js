//----------------------------day6_level_1 1.exercise-------------------------\\
// # Iterate 0 to 10 using for loop, do the same using while and do while loop

for(let i= 0; i<=10; i++){
    console.log(i)
}

let i =0;
while( i <=10){
    console.log(i)
    i ++
}

let i= 0;
do{
    console.log(i)
    i++
} while(i<=10)

//----------------------------day6_level_1 2.exercise-------------------------\\
// # Iterate 10 to 0 using for loop, do the same using while and do while loop

for(let i= 10; i>=0; i--){
    console.log(i)
}

let i =10;
while( i >=0){
    console.log(i)
    i --
}

let i= 10;
do{
    console.log(i)
    i--
} while(i>=0)

//----------------------------day6_level_1 3.exercise-------------------------\\
// # Iterate 0 to n using for loop

let n =5

for(let i=0; i<=n; i++){

console.log(i)
}

//----------------------------day6_level_1 4.exercise-------------------------\\
// # Write a loop that makes the following pattern using console.log():

let string = ""

for(let i=1; i<=7; i++){

  for(let j=1; j<=i; j++){
    string+="#"

  }
  console.log(string)
  string+= ""
}

//----------------------------day6_level_1 5.exercise-------------------------\\
// # Use loop to print the following pattern:

const numbers =[0,1,2,3,4,5,6,7,8,9,10]

for(num of numbers){
    console.log(`${num} * ${num} = ${num*num}`)
}

//----------------------------day6_level_1 6.exercise-------------------------\\
// # Using loop print the following pattern

let output = 'i   i^2  i^3 \n'
for(let i=0; i<=10; i++){

  let square =i*i;
  let cube = i*i*i;
  
  output+= i + "     "+ square + "     " + cube + "\n"
}
console.log(output)

//----------------------------day6_level_1 7.exercise-------------------------\\
// # Use for loop to iterate from 0 to 100 and print only even numbers

for(let i=0; i<=100; i+=2){
    console.log(i)
}

//----------------------------day6_level_1 8.exercise-------------------------\\
// # Use for loop to iterate from 0 to 100 and print only odd numbers

for(let i=1; i<=100; i+=2){
    console.log(i)
}

//----------------------------day6_level_1 9.exercise-------------------------\\
// # Use for loop to iterate from 0 to 100 and print only prime numbers
//----------------------------day6_level_1 10.exercise-------------------------\\
// # Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0
for(let i=0; i<=100; i++){
sum+=i
}
console.log(sum)

//----------------------------day6_level_1 11.exercise-------------------------\\
// # Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumeven = 0
for(let i=0; i<=100; i+=2){
sumeven+=i
}
console.log(sumeven)


let sumodd = 0
for(let i=1; i<=100; i+=2){
sumodd+=i
}
console.log(sumodd)

//----------------------------day6_level_1 12.exercise-------------------------\\
// # Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let sumeven = 0
for(let i=0; i<=100; i+=2){
sumeven+=i
}
let sumodd = 0
for(let i=1; i<=100; i+=2){
sumodd+=i
}
let arr = [sumeven,sumodd]
console.log(arr)

//----------------------------day6_level_1 13.exercise-------------------------\\
// # Develop a small script which generate array of 5 random numbers

outPut = ''
for(let i =0; i<5; i++){
    outPut+= Math.floor(Math.random(i)*10)
}
console.log(outPut)

//----------------------------day6_level_1 14.exercise-------------------------\\
// # Develop a small script which generate array of 5 random numbers and the numbers must be unique

let arr = []
while(arr.length<5){
    randomNum = Math.floor(Math.random() * 10)
    if(!arr.includes(randomNum)){
        arr.push(randomNum)
    }
}
console.log(arr.toString())

//----------------------------day6_level_1 15.exercise-------------------------\\
// # Develop a small script which generate a six characters random id:

let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let randomCharecters = ''
for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * text.length)
    randomCharecters += text[index]
}
console.log(randomCharecters)

//___________________________starting_exercise_level_2_______________________\\

//----------------------------day6_level_2 1.exercise-------------------------\\
// # Develop a small script which generate any number of characters random id:

let text = 'A1B2C3D4E5F6G7H8I9J0KLMN1O2P3Q4R5S6T7UV8W9XYZabcdefghijklmnopqrstuvwxyz'
let randomCharecters = ''

let index = Math.floor(Math.random() * text.length)

for (let i = 0; i < index; i++) {

    let a = Math.floor(Math.random()*i)
    randomCharecters += text[a]
}
console.log(randomCharecters)

//----------------------------day6_level_2 2.exercise-------------------------\\
// # Write a script which generates a random hexadecimal number.

//----------------------------day6_level_2 3.exercise-------------------------\\
// # Write a script which generates a random rgb color number

let number1 = Math.floor(Math.random()*256)
let number2 = Math.floor(Math.random()*256)
let number3 = Math.floor(Math.random()*256)

console.log(`rgb(${number1},${number2},${number3})`)

//----------------------------day6_level_2 4.exercise-------------------------\\
// # Using the above countries array, create the following new array.

newArr = []
for(const country of countries){
      newArr.push(country.toLocaleUpperCase())
}
console.log(newArr)

//----------------------------day6_level_2 5.exercise-------------------------\\
// # Using the above countries array, create an array for countries length

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  let arr = []
  for(let i=0; i<countries.length; i++){
    let country =countries[i]
    arr.push(country.length)
  }
  console.log(arr)
//----------------------------day6_level_2 6.exercise-------------------------\\
// # Use the countries array to create the following array of arrays:

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  let arr = []
  for(let i=0; i<countries.length; i++){
    let country = countries[i]
    let coun = country.slice(0,3)
    let index = country.length
arr.push(`${country},'${coun}',${index}`)

}
console.log(arr)

//----------------------------day6_level_2 7.exercise-------------------------\\
// # In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  let newArr = []
  for(const country of countries){
      if(country.includes('land')){
        newArr.push(country)
      }
  }
  console.log(newArr)

//----------------------------day6_level_2 8.exercise-------------------------\\
// # In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  let arr =[]
  for(const country of countries){
if(country.endsWith('ia')){
   arr.push(country)
}
  }
  console.log(arr)

//----------------------------day6_level_2 9.exercise-------------------------\\
// # Using the above countries array, find the country containing the biggest number of characters.

const arr = ['Albania', 'Bolivia','Ethiopia']
 
let count = '';

for(let i = 0; i<arr.length; i++){
  if( arr[i].length > count.length){

    count = arr[i]
  }
}
console.log(count)


//----------------------------day6_level_2 10.exercise-------------------------\\
// # Using the above countries array, find the country containing only 5 characters.

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  let newArr = []
  for(const country of countries){
    if(country.length==5){
      newArr.push(country)
    }
  }
  console.log(newArr)

//----------------------------day6_level_2 11.exercise-------------------------\\
// # Find the longest word in the webTechs array

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
 let longWorld = ''

 for(let tech of webTechs){
if(tech.length>longWorld.length){
      longWorld = tech 
}
 }
 console.log(longWorld)

//----------------------------day6_level_2 12.exercise-------------------------\\
// # Use the webTechs array to create the following array of arrays:

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  let arr = []
  for( let tech of webTechs){
    arr.push(`${tech},${tech.length}`)
  }
  console.log(arr)

//----------------------------day6_level_2 13.exercise-------------------------\\
// # An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

const skills = ['MongoDB', 'Express','React', 'Node']

let mern = '';
for(let i=0; i<skills.length; i++){
mern += skills[i][0]
}
console.log(mern)

//----------------------------day6_level_2 14.exercise-------------------------\\
// # Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

const arr = ["HTML", "CSS","JS","React","Redux","Node","Express","MongoDB"]

for(let i=0; i<arr.length; i++){
  console.log(arr[i])
}

for(const skills of arr){
  console.log(skills)
}

//----------------------------day6_level_2 15.exercise-------------------------\\
// # This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

const fruit = ["banana","orange","mango","lemon"]

let reverseFruit = [];

for(let i=fruit.length-1; i>=0; i--){
reverseFruit.push(fruit[i])
}
console.log(reverseFruit)

//----------------------------day6_level_2 16.exercise-------------------------\\
// # Print all the elements of array as shown below.

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const merger =fullStack[0].concat(fullStack[1])
  for(const skills of merger){
    console.log(skills)
  }

//___________________________starting_exercise_level_3_______________________\\

//----------------------------day6_level_3 1.exercise-------------------------\\
// # Copy countries array(Avoid mutation)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  const newCountries = countries.slice()
  console.log(newCountries)

//----------------------------day6_level_3 2.exercise-------------------------\\
// # Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  const sorCountries = countries.slice()
  console.log(sorCountries.sort())

//----------------------------day6_level_3 3.exercise-------------------------\\
// # Sort the webTechs array and mernStack array


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  mernStack.sort()
  webTechs.sort()
  console.log(webTechs,mernStack)

//----------------------------day6_level_3 4.exercise-------------------------\\
// # Extract all the countries contain the word 'land' from the countries array and print it as array

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
let newArr = []
countries.forEach(function(countri){
if(countri.includes('land')){
    newArr.push(countri)
}
}
)  
console.log(newArr)

//----------------------------day6_level_3 5.exercise-------------------------\\
// # Find the country containing the hightest number of characters in the countries array


const arr = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  let count = '';

for(let i = 0; i<arr.length; i++){
  if( arr[i].length > count.length){

    count = arr[i]
  }
}
console.log(count)

//----------------------------day6_level_3 6.exercise-------------------------\\
// # Extract all the countries contain the word 'land' from the countries array and print it as array

const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'ThailanD',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
  let outPut = []
  for(let country of countries){
          if(country.toLowerCase().includes('land')){
            outPut.push(country)
          }
  }
  console.log(outPut)



//----------------------------day6_level_3 7.exercise-------------------------\\
// # Extract all the countries containing only four characters from the countries array and print it as array

  let outPut = []
  for(let country of countries){
          if(country.length == 4){
            outPut.push(country)
          }
  }
  console.log(outPut)

//----------------------------day6_level_3 8.exercise-------------------------\\
// # Extract all the countries containing two or more words from the countries array and print it as array

let result = []
  for(let country of countries){
    if(country.includes(" ")){
        result.push(country)

    }
  }
  console.log(result)

//----------------------------day6_level_3 9.exercise-------------------------\\
// # Reverse the countries array and capitalize each country and stored it as an array
let result = []
let newArr = countries.reverse()

  for(let country of newArr){
    result.push(country.toLocaleUpperCase())
  }
  console.log(result)