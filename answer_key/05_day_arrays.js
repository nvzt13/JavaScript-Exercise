//todo day5_level1 1.exercise
// const arr =[];
// console.log(arr)


//todo day5_level1 2.exercise
// const arr =[1,2,3,4,5,6];
// console.log(arr)


//todo day5_level1 3.exercise
// const arr =[1,2,3,4,5,6];
// console.log(arr.length)


//todo day5_level1 4.exercise
// const arr =[1,2,3,4,5,6];
// console.log(arr[0])
// console.log(arr.length/2, arr.length/2+1)
// console.log(arr[arr.length-1])


//todo day5_level1 5.exercise
// const mixedDataTypes = [1,'nevzat',true,undefined,null, {}]
// console.log(mixedDataTypes)


//todo day5_level1 6.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']


//todo day5_level1 7.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// console.log(itCompanies)


//todo day5_level1 8.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// console.log(itCompanies.length) 


//todo day5_level1 9.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// console.log(itCompanies[0])
// console.log(itCompanies[Math.round(itCompanies.length/2-1)])
// console.log(itCompanies[itCompanies.length-1])


//todo day5_level1 10.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// let result = itCompanies.forEach(countri => {
//   console.log(countri)
// })


//todo day5_level1 11.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// let result = itCompanies.forEach(countri => {
// console.log(countri.toLocaleUpperCase())
// })


//todo day5_level1 12.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// console.log(`${itCompanies.toString()} are big companies.`)


//todo day5_level1 13.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// if(itCompanies.includes('Facebook')){
//     console.log("Facebook")
// }
// else{
//     console.log("company is not found")
// }


//todo day5_level1 14.exercise
// const companies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// const result=[]
// for(let i=0; i<companies.length; i++){
//     let company =companies[i]
//     let count =0
//     for(let j=0; j<company.length; j++){
//         let char =company[j]
//         if(char.toLowerCase() == 'o'){
//             count++;
//         }  
//     }
//     if(count>1){
//         result.push(company)
//     }
// }
// console.log(result)


//todo day5_level1 15.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// console.log(itCompanies.sort())


//todo day5_level1 16.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// console.log(itCompanies.reverse())



//todo day5_level1 17.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// console.log(itCompanies.slice(0,3))


//todo day5_level1 18.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length))


//todo day5_level1 19.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// console.log(itCompanies.length) //7
// console.log(itCompanies.slice(itCompanies.length/2,itCompanies.length/2+1))


//todo day5_level1 20.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
//  itCompanies.shift()
// console.log(itCompanies)


//todo day5_level1 21.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// itCompanies.splice(itCompanies.length/2,1)
// console.log(itCompanies)


//todo day5_level1 22.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// itCompanies.pop()
// console.log(itCompanies)


//todo day5_level1 23.exercise
// const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// itCompanies.splice(0,itCompanies.length)
// console.log(itCompanies)

//? day5_level2 1.exercise
//? day5_level2 2.exercise

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// let noPunctuations = text.replace(/[.,]/gi)
// let words = noPunctuations.split(' ')
// console.log(words)
// console.log(words.length)

//? day5_level2 3.exercise

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// shoppingCart.unshift('meat') 

// shoppingCart.push('Sugar')

// let indexHoney = shoppingCart.indexOf('Honey') // 4
// shoppingCart.splice(4,1)

// let indexTea = shoppingCart.indexOf('Tea') // 3
// shoppingCart[3] ='Green Tea'

// console.log(shoppingCart)

//? day5_level2 4.exercise

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
// let checkEthiopia = countries.includes('Ethiopia')
// console.log(checkEthiopia)

//? day5_level2 5.exercise

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//   let chechSass = webTechs.includes('Sass')  // false
//   webTechs.push('Sass')
//   console.log(webTechs)

//? day5_level2 6.exercise

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// let fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)


//! day5_level3 1.exercise

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// let min = ages.sort()
// console.log(min[0])


// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// let median = ages[ages.length/2] + ages[ages.length/2 -1 ]/2
// console.log(median)


// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// sum =0

// for(const num of ages ){
// sum+=num

// }

// let average = sum/(ages.length)
// console.log(average)


// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// let arrangement = ages.sort()
// let min = arrangement[0]
// let max = arrangement[arrangement.length-1]
// let range = max - min
// console.log(range)

//! day5_level3 2.exercise

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//   console.log(countries.length)  // 11
//   let middleCountry = countries[Math.ceil(countries.length/2)-1]
//   console.log(middleCountry)


//! day5_level3 3.exercise


// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
//   console.log(countries.length)  // 11 not even
//   countries.unshift("Turkey")
//   let part1 = countries.splice(0,6)
//   let part2 = countries.splice(0,6)
//   console.log(part1,part2)
