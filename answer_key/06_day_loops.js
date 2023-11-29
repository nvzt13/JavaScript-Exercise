//----------------------------day6_level_1 1.exercise-------------------------\\

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

//----------------------------day6_level_1 1.exercise-------------------------\\

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

//----------------------------day6_level_1 1.exercise-------------------------\\

let n =5

for(let i=0; i<=n; i++){

console.log(i)
}

//----------------------------day6_level_1 1.exercise-------------------------\\


let string = ""

for(let i=1; i<=7; i++){

  for(let j=1; j<=i; j++){
    string+="#"

  }
  console.log(string)
  string+= ""
}

//----------------------------day6_level_1 1.exercise-------------------------\\

const numbers =[0,1,2,3,4,5,6,7,8,9,10]

for(num of numbers){
    console.log(`${num} * ${num} = ${num*num}`)
}

//----------------------------day6_level_1 1.exercise-------------------------\\

let output = 'i   i^2  i^3 \n'
for(let i=0; i<=10; i++){

  let square =i*i;
  let cube = i*i*i;
  
  output+= i + "     "+ square + "     " + cube + "\n"
}
console.log(output)

//----------------------------day6_level_1 1.exercise-------------------------\\

for(let i=0; i<=100; i+=2){
    console.log(i)
}

//----------------------------day6_level_1 1.exercise-------------------------\\

for(let i=1; i<=100; i+=2){
    console.log(i)
}

//----------------------------day6_level_1 1.exercise-------------------------\\
//----------------------------day6_level_1 1.exercise-------------------------\\

let sum = 0
for(let i=0; i<=100; i++){
sum+=i
}
console.log(sum)

//----------------------------day6_level_1 1.exercise-------------------------\\

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

//----------------------------day6_level_1 1.exercise-------------------------\\

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

//----------------------------day6_level_1 1.exercise-------------------------\\

outPut = ''
for(let i =0; i<5; i++){
    outPut+= Math.floor(Math.random(i)*10)
}
console.log(outPut)

//----------------------------day6_level_1 14.exercise-------------------------\\

let arr = []
while(arr.length<5){
    randomNum = Math.floor(Math.random() * 10)
    if(!arr.includes(randomNum)){
        arr.push(randomNum)
    }
}
console.log(arr.toString())

//----------------------------day6_level_1 1.exercise-------------------------\\

let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let randomCharecters = ''
for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * text.length)
    randomCharecters += text[index]
}
console.log(randomCharecters)

//___________________________starting_exercise_level_2_______________________\\

//----------------------------day6_level_2 1.exercise-------------------------\\

let text = 'A1B2C3D4E5F6G7H8I9J0KLMN1O2P3Q4R5S6T7UV8W9XYZabcdefghijklmnopqrstuvwxyz'
let randomCharecters = ''

let index = Math.floor(Math.random() * text.length)

for (let i = 0; i < index; i++) {

    let a = Math.floor(Math.random()*i)
    randomCharecters += text[a]
}
console.log(randomCharecters)

//----------------------------day6_level_2 2.exercise-------------------------\\


//----------------------------day6_level_2 3.exercise-------------------------\\

let number1 = Math.floor(Math.random()*256)
let number2 = Math.floor(Math.random()*256)
let number3 = Math.floor(Math.random()*256)

console.log(`rgb(${number1},${number2},${number3})`)

//----------------------------day6_level_2 4.exercise-------------------------\\

newArr = []
for(const country of countries){
      newArr.push(country.toLocaleUpperCase())
}
console.log(newArr)

//----------------------------day6_level_2 5.exercise-------------------------\\

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

const arr = ['Albania', 'Bolivia','Ethiopia']
 
let count = '';

for(let i = 0; i<arr.length; i++){
  if( arr[i].length > count.length){

    count = arr[i]
  }
}
console.log(count)


//----------------------------day6_level_2 10.exercise-------------------------\\

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

const skills = ['MongoDB', 'Express','React', 'Node']

let mern = '';
for(let i=0; i<skills.length; i++){
mern += skills[i][0]
}
console.log(mern)

//----------------------------day6_level_2 14.exercise-------------------------\\

const arr = ["HTML", "CSS","JS","React","Redux","Node","Express","MongoDB"]

for(let i=0; i<arr.length; i++){
  console.log(arr[i])
}

for(const skills of arr){
  console.log(skills)
}

//----------------------------day6_level_2 15.exercise-------------------------\\

const fruit = ["banana","orange","mango","lemon"]

let reverseFruit = [];

for(let i=fruit.length-1; i>=0; i--){
reverseFruit.push(fruit[i])
}
console.log(reverseFruit)

//----------------------------day6_level_2 16.exercise-------------------------\\

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

  let outPut = []
  for(let country of countries){
          if(country.length == 4){
            outPut.push(country)
          }
  }
  console.log(outPut)

//----------------------------day6_level_3 8.exercise-------------------------\\

let result = []
  for(let country of countries){
    if(country.includes(" ")){
        result.push(country)

    }
  }
  console.log(result)

//----------------------------day6_level_3 9.exercise-------------------------\\

let result = []
let newArr = countries.reverse()

  for(let country of newArr){
    result.push(country.toLocaleUpperCase())
  }
  console.log(result)