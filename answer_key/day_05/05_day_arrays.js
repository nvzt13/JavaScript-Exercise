//----------------------------day5_level_1 1.exercise-------------------------\\
// # Declare an empty array;

const arr =[];
console.log(arr)

//----------------------------day5_level_1 2.exercise-------------------------\\
// # Declare an array with more than 5 number of elements

const arr =[1,2,3,4,5,6];
console.log(arr)

//----------------------------day5_level_1 3.exercise-------------------------\\
// # Find the length of your array

const arr =[1,2,3,4,5,6];
console.log(arr.length)


//----------------------------day5_level_1 4.exercise-------------------------\\
// # Get the first item, the middle item and the last item of the array

const arr =[1,2,3,4,5,6];
console.log(arr[0])
console.log(arr.length/2, arr.length/2+1)
console.log(arr[arr.length-1])


//----------------------------day5_level_1 5.exercise-------------------------\\
// # Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [1,'nevzat',true,undefined,null, {}]
console.log(mixedDataTypes)


//----------------------------day5_level_1 6.exercise-------------------------\\
// # Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']


//----------------------------day5_level_1 7.exercise-------------------------\\
// # Print the array using console.log()

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies)


//----------------------------day5_level_1 8.exercise-------------------------\\
// # Print the number of companies in the array

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies.length) 


//----------------------------day5_level_1 9.exercise-------------------------\\
// # Print the first company, middle and last company

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies[0])
console.log(itCompanies[Math.round(itCompanies.length/2-1)])
console.log(itCompanies[itCompanies.length-1])


//----------------------------day5_level_1 10.exercise-------------------------\\
// # Print out each company

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
let result = itCompanies.forEach(countri => {
  console.log(countri)
})


//----------------------------day5_level_1 11.exercise-------------------------\\
// # Change each company name to uppercase one by one and print them out

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
let result = itCompanies.forEach(countri => {
console.log(countri.toLocaleUpperCase())
})


//----------------------------day5_level_1 12.exercise-------------------------\\
// # Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(`${itCompanies.toString()} are big companies.`)


//----------------------------day5_level_1 13.exercise-------------------------\\
// # Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
if(itCompanies.includes('Facebook')){
    console.log("Facebook")
}
else{
    console.log("company is not found")
}


//----------------------------day5_level_1 14.exercise-------------------------\\
// # Filter out companies which have more than one 'o' without the filter method

const companies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
const result=[]
for(let i=0; i<companies.length; i++){
    let company =companies[i]
    let count =0
    for(let j=0; j<company.length; j++){
        let char =company[j]
        if(char.toLowerCase() == 'o'){
            count++;
        }  
    }
    if(count>1){
        result.push(company)
    }
}
console.log(result)


//----------------------------day5_level_1 15.exercise-------------------------\\
// # Sort the array using sort() method

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies.sort())


//----------------------------day5_level_1 16.exercise-------------------------\\
// # Reverse the array using reverse() method

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies.reverse())



//----------------------------day5_level_1 17.exercise-------------------------\\
// # Slice out the first 3 companies from the array

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies.slice(0,3))


//----------------------------day5_level_1 18.exercise-------------------------\\
// # Slice out the last 3 companies from the array

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length))


//----------------------------day5_level_1 19.exercise-------------------------\\
// # Slice out the middle IT company or companies from the array

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies.length) //7
console.log(itCompanies.slice(itCompanies.length/2,itCompanies.length/2+1))


//----------------------------day5_level_1 20.exercise-------------------------\\
// # Remove the first IT company from the array

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
 itCompanies.shift()
console.log(itCompanies)


//----------------------------day5_level_1 21.exercise-------------------------\\
// # Remove the middle IT company or companies from the array

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
itCompanies.splice(itCompanies.length/2,1)
console.log(itCompanies)


//----------------------------day5_level_1 22.exercise-------------------------\\
// # Remove the last IT company from the array

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
itCompanies.pop()
console.log(itCompanies)


//----------------------------day5_level_1 23.exercise-------------------------\\
// # Remove all IT companies

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
itCompanies.splice(0,itCompanies.length)
console.log(itCompanies)

//___________________________starting_exercise_level_2_______________________\\

//----------------------------day5_level_2 1.exercise-------------------------\\
// # Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file


//----------------------------day5_level_2 2.exercise-------------------------\\
// # First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let noPunctuations = text.replace(/[.,]/gi)
let words = noPunctuations.split(' ')
console.log(words)
console.log(words.length)


//----------------------------day5_level_2 3.exercise-------------------------\\
// # In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('meat') 

shoppingCart.push('Sugar')

let indexHoney = shoppingCart.indexOf('Honey') // 4
shoppingCart.splice(4,1)

let indexTea = shoppingCart.indexOf('Tea') // 3
shoppingCart[3] ='Green Tea'

console.log(shoppingCart)


//----------------------------day5_level_2 4.exercise-------------------------\\
// # In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

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
  
let checkEthiopia = countries.includes('Ethiopia')
console.log(checkEthiopia)


//----------------------------day5_level_2 5.exercise-------------------------\\
// # 
// const webTechs = [In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  let chechSass = webTechs.includes('Sass')  // false
  webTechs.push('Sass')
  console.log(webTechs)


//----------------------------day5_level_2 6.exercise-------------------------\\
// # Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//___________________________starting_exercise_level_3_______________________\\

//----------------------------day5_level_3 1.exercise-------------------------\\
// # The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let min = ages.sort()
console.log(min[0])


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let median = ages[ages.length/2] + ages[ages.length/2 -1 ]/2
console.log(median)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
sum =0

for(const num of ages ){
sum+=num

}

let average = sum/(ages.length)
console.log(average)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let arrangement = ages.sort()
let min = arrangement[0]
let max = arrangement[arrangement.length-1]
let range = max - min
console.log(range)


//----------------------------day5_level_3 2.exercise-------------------------\\
// # Find the middle country(ies) in the countries array

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
  
  console.log(countries.length)  // 11
  let middleCountry = countries[Math.ceil(countries.length/2)-1]
  console.log(middleCountry)



//----------------------------day5_level_3 3.exercise-------------------------\\
// # Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

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
  console.log(countries.length)  // 11 not even
  countries.unshift("Turkey")
  let part1 = countries.splice(0,6)
  let part2 = countries.splice(0,6)
  console.log(part1,part2)
