
 //!                   String Methods



// let text = 'Everything in, JavAScript is, an object in'


// 1 - length
// console.log(text.length)


// 2 - Accessing characters in a string
// console.log(text[7])


// 3 - toUpperCase();
// console.log(text.toUpperCase())


// 4 - toLowerCase();
// console.log(text.toLowerCase())


// 5 - substring()
// console.log(text.substring(0,5))


// 6 - split()
// console.log(text.split(''))


// 7 - trim()
// console.log(text.trim())


// 8 - includes() 
// console.log(text.includes('is'))


// 9 - replace()
// console.log(text.replace('JavaScript','phyton'))


// 10 - charAt()
// console.log(text.charAt(5))


// 11 - charCodeAt()
// console.log(text.charCodeAt(5))


// 12 - indexOf()
// console.log(text.indexOf('in'))


// 13 - lastIndexOf()
// console.log(text.lastIndexOf('in'))


// 14 - concat()
// console.log(text.concat('nevzat'))


// 15 - starstWith()
// 16 - endsWith ()


// 17 - search()
// console.log(text.search(/JavaScript/gi))


// 18 - match()
// let pattern = /in/gi
// console.log(text.match(pattern))


// 19 - repeat()
// console.log(text.repeat(5))

 //!                            Math Methods

//? 1  console.log(Math.round(PI))                    // 3

//? 2 console.log(Math.round(9.81))                   // 10 nere yakınsa

//? 3 console.log(Math.floor(PI))                     // 3 zemin
  
//? 4console.log(Math.ceil(PI))                       // 4 tavan

//? 5 console.log(Math.min(-5, 3, 20, 4, 5, 10))      // -5,

//? 6 console.log(Math.max(-5, 3, 20, 4, 5, 10))      // 20

//? 7 const randNum = Math.random()                   // 0.31              

//? 8 console.log(Math.abs(-10))                      // 10 mutlak

//? 9 console.log(Math.sqrt(100))                     // 10 karekök

//? 10 console.log(Math.pow(3, 2))                    // 9 üs

//? 11 console.log(Math.E)                           // 2.718

 //!                        Array Medhods

//todo 1 Array()

// const arr = Array()
// console.log(arr)

// const eightEmptyValues = Array(8) // it creates eight empty values
// console.log(eightEmptyValues) // [empty x 8]


//todo 2  fill()

// const arr = Array() // creates an an empty array
// console.log(arr)

// const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
// console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

// const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
// console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

// const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
// console.log(four4values) // [4, 4, 4, 4]


//todo 3  concat()


// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdList = firstList.concat(secondList)

// console.log(thirdList) // [1, 2, 3, 4, 5, 6]


//todo 4    length


// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.length) // -> 5 is the size of the array



//todo 5  indexOf()   if index not found return -1

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.indexOf(5)) // -> 4
// console.log(numbers.indexOf(0)) // -> -1
// console.log(numbers.indexOf(1)) // -> 0
// console.log(numbers.indexOf(6)) // -> -1



//todo 6 lastIndexOf()

// const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

// console.log(numbers.lastIndexOf(2)) // 7
// console.log(numbers.lastIndexOf(0)) // -1
// console.log(numbers.lastIndexOf(1)) //  6
// console.log(numbers.lastIndexOf(4)) //  3
// console.log(numbers.lastIndexOf(6)) // -1


//todo 7 includes()

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.includes(5)) // true
// console.log(numbers.includes(0)) // false
// console.log(numbers.includes(1)) // true
// console.log(numbers.includes(6)) // false


//todo 8 Array.isArray()

// const numbers = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers)) // true

// const number = 100
// console.log(Array.isArray(number)) // false

//todo 9 toString()

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString()) // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook


//todo 10 join()

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// console.log(names.join()) 
// console.log(names.join('')) 
// console.log(names.join(' ')) 
// console.log(names.join(', ')) 
// console.log(names.join(' # ')) 

//                               forEach

// let sum = 0
// const arr =[1,2,3,4,5,6,7,8,9,10]
// arr.forEach(function(element){
//     sum+=element
// })
// console.log(sum)


// let sum = 0
// const arr =[1,2,3,4,5,6,7,8,9,10]
// arr.forEach(element => sum+=element)
// console.log(sum)


//                                 map


// const numbers = [1, 2, 3, 4, 5]
// const numbersSquare = numbers.map((num) => num * num)
// console.log(numbersSquare)


//                                filter


// const countries=['turkey','siria','ırak','china','japan']
// const a = countries.filter((country) => country.includes("a"))
// console.log(a)


//                            reduce



// const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce((acc, cur) => acc + cur, 0)
// console.log(sum)


//                             every


// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const areAllStr = names.every((name) => typeof name === 'string')
// console.log(areAllStr)



//                              find
                              

// const arr = [24,45,23,15,87]
// const higgerArr = arr.find((number) => number < 23)
// console.log(higgerArr)


//                            findindex


// const names = ['nevzat','züleyha','gül','yahya']
// const name1 = names.findIndex((isim) => isim.length > 6)
// console.log(name1)

//                             some

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const bools = [true, true, true, true]
// const areSomeTrue = bools.some((b) =>  b == true)
// console.log(areSomeTrue) //true


                            
//                             sort

// const product = ['Milk','Coffe','Sugar','Honey']
// console.log(product.sort())


//todo 11 slice()

// const numbers = [1,2,3,4,5]

// console.log(numbers.slice()) // -> it copies all  item
// console.log(numbers.slice(0)) // -> it copies all  item
// console.log(numbers.slice(0, numbers.length)) // it copies all  item
// console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position

//todo 12 splice(kaldırılacak index,kalkacak elman sayıssı,eklnn)

// const numbers = [1, 2, 3, 4, 5]
// numbers.splice()
// console.log(numbers)                // -> remove all items

// const numbers = [1, 2, 3, 4, 5]
// numbers.splice(0,1)
// console.log(numbers)            // remove the first item


//todo 13  push()


// const arr  = ['item1', 'item2','item3']
// arr.push('new item')
// console.log(arr)


//todo 14  pop()

// const numbers = [1, 2, 3, 4, 5]
// numbers.pop() // -> remove one item from the end
// console.log(numbers) // -> [1,2,3,4]


//todo 15 shift()

// const numbers = [1, 2, 3, 4, 5]
// numbers.shift() // -> remove one item from the beginning
// console.log(numbers) // -> [2,3,4,5]


//todo 16  unshift()

// const numbers = [1, 2, 3, 4, 5]
// numbers.unshift(0) // -> add one item from the beginning
// console.log(numbers) // -> [0,1,2,3,4,5]

//todo 17  reverse()


// const numbers = [1, 2, 3, 4, 5]
// numbers.reverse() // -> reverse array order
// console.log(numbers) // [5, 4, 3, 2, 1]

// numbers.reverse()
// console.log(numbers) // [1, 2, 3, 4, 5]

//todo 18  sort()

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
  
//   webTechs.sort()
//   console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
  
//   webTechs.reverse() // after sorting we can reverse it
//   console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]


//!                         loops 


//?  for

// for(let i = 0; i <= 5; i++){
//     console.log(i)
//   }
  
  // 0 1 2 3 4 5


//? while 

// let i = 0
// while (i <= 5) {
//   console.log(i)
//   i++
// }

// 0 1 2 3 4 5

//? do while

// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i <= 5)

// 0 1 2 3 4 5

//? for of loop


// const numbers = [1, 2, 3, 4, 5]

// for (const num of numbers) {
//   console.log(num)
// }


