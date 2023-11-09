//todo day9_level1 1.exercise
//açıklamalar bana göre degil


//todo day9_level1 2.exercise
// const callback = (n) => {return n**2}
// function cube(callback,n){
// return callback(n) * n}
// console.log(cube(callback,3))


//todo day9_level1 3.exercise
// const countries = ['turkiye','sırıa','japan','germany']
// countries.forEach((element => console.log(element)) )


//todo day9_level1 4.exercise
// const names = ['nevzat','atalay','gül','atalay']
// names.forEach(name1 => console.log(name1))


//todo day9_level1 5.exercise
// const numbers = [15,43, 56,78,25,2030]
// numbers.forEach(num => console.log(num))


//todo day9_level1 6.exercise
// const countries = ['turkiye','sırıa','japan','germany']
// const upperCase =countries.map((upper) => upper.toUpperCase())
// console.log(upperCase)


//todo day9_level1 7.exercise
// const countries = ['turkiye','sırıa','japan','germany']
// const newArr = countries.map((new1) => new1.length > 5)
// console.log(newArr)


//todo day9_level1 8.exercise
// const numbers = [2,3,4,5,6]
// const square = numbers.map((num) => num**2)
// console.log(square)


//todo day9_level1 9.exercise
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const newArr = names.map((name1) => name1.toUpperCase())
// console.log(newArr)



//todo day9_level1 10.exercise
//todo day9_level1 11.exercise
// const countries = ['Finland','Iceland','Grönland','Turkey','Germany']
// const newArr = countries.filter((new1) => new1.includes('land'))
// console.log(newArr)



//todo day9_level1 .12exercise
// const countries = ['Finland','Icelan','Grönland','Turkey','Germany',]
// const newArr = countries.filter((new1) => new1.length ==6)
// console.log(newArr)


//todo day9_level1 13.exercise
// const countries = ['Finland','Iceland','Grönland','Turkey','Germany']
// const newArr = countries.filter((new1) => new1.length > 6)
// console.log(newArr)


//todo day9_level1 14.exercise
// const countries = ['Finland','Iceland','Grönland','Turkey','Germany','England','Estonia']
// const newArr =countries.filter((new1) => new1.startsWith('E'))
// console.log(newArr)


//todo day9_level1 15.exercise
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
//   ];
  
//   const filteredProducts = products.filter(product => product.price !== '' && product.price !== ' ');
//   console.log(filteredProducts);
  

//todo day9_level1 16.exercise
// const arr = ['ali', 'veli', 'küpeli']

// function getStringList(){
//    let newArr= []
//      arr.map(string => newArr.push(string) )
//      return  console.log(newArr)
// }
// getStringList(arr)


//todo day9_level1 17.exercise
// const numbers = [2,3,4,5,6]
// let sum = numbers.reduce((acc,cur) => acc + cur )
// console.log(sum)

//todo day9_level1 18.exercise
//todo day9_level1 19.exercise
//todo day9_level1 20.exercise

// const names = ['nevzat','atalay','gül','atalay']
// const newArr = names.some((name1) => name1.length > 5)
// console.log(newArr)


//todo day9_level1 21.exercise

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const newArr = countries.every((count) => count.includes('land') )
// console.log(newArr)


//todo day9_level1 22.exercise
//todo day9_level1 23.exercise

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const newArr = countries.find((count) => count.length == 6)
// console.log(newArr)

//todo day9_level1 24.exercise

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const newArr = countries.findIndex((count) => count.length == 6)
// console.log(newArr)


//todo day9_level1 25.exercise

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const newArr = countries.findIndex((count) => count.includes("Norway"))
// console.log(newArr)


//todo day9_level1 26.exercise

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const newArr = countries.findIndex((count) => count.includes("russia"))
// console.log(newArr)


