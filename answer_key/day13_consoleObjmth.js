//todo day13_level1 1.exercise

// const countries = ['Norway', 'Sweden','England','Iceland']
// console.table(countries)

//todo day13_level1 2.exercise


// const countries ={
//     countri: 'Germany',
//     popolation: 564654,
//     lamgue: 'German'
// }
// console.table(countries)
    

//todo day13_level1 3.exercise

// const names = ['Asabeneh', 'Brook', 'David', 'John']
// const countries = [
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo']
// ]
// const user = {
//   name: 'Asabeneh',
//   title: 'Programmer',
//   country: 'Finland',
//   city: 'Helsinki',
//   age: 250
// }
// const users = [
//   {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250
//   },
//   {
//     name: 'Eyob',
//     title: 'Teacher',
//     country: 'Sweden',
//     city: 'London',
//     age: 25
//   },
//   {
//     name: 'Asab',
//     title: 'Instructor',
//     country: 'Norway',
//     city: 'Oslo',
//     age: 22
//   },
//   {
//     name: 'Matias',
//     title: 'Developer',
//     country: 'Denmark',
//     city: 'Copenhagen',
//     age: 28
//   }
// ]

// console.group('names')
// console.log(names)
// console.groupEnd()

// console.group('countries')
// console.log(countries)
// console.groupEnd()

// console.group('user')
// console.log(user)
// console.groupEnd()

//? exercise 1

// console.assert(10>2*10)

//? exercise 2

// console.warn("this is a warning message")

//? exercise 3

// console.error('This is a error message')

//!  exercise 1
// Create an array of 1000000 elements
// let arr = [];
// for (let i = 0; i < 1000000; i++) {
//   arr.push(i);
// }

// // Define a function to measure the execution time of a loop
// function measureTime(loopName, loopFunction) {
//   let start = performance.now(); // Get the current time in milliseconds
//   loopFunction(); // Execute the loop function
//   let end = performance.now(); // Get the current time in milliseconds
//   let time = end - start; // Calculate the elapsed time in milliseconds
//   console.log(loopName + " took " + time + " milliseconds"); // Print the result
// }

// // Define a function to do something with each element of the array
// function doSomething(element) {
//   element = element * 2; // Multiply the element by 2
// }

// // Define a while loop
// function whileLoop() {
//   let i = 0; // Initialize a counter variable
//   while (i < arr.length) { // Loop until the counter reaches the array length
//     doSomething(arr[i]); // Do something with the current element
//     i++; // Increment the counter
//   }
// }

// // Define a for loop
// function forLoop() {
//   for (let i = 0; i < arr.length; i++) { // Loop from 0 to the array length
//     doSomething(arr[i]); // Do something with the current element
//   }
// }

// // Define a for of loop
// function forOfLoop() {
//   for (let element of arr) { // Loop through each element of the array
//     doSomething(element); // Do something with the current element
//   }
// }

// // Define a forEach loop
// function forEachLoop() {
//   arr.forEach(doSomething); // Call the doSomething function for each element of the array
// }

// // Measure and compare the execution time of each loop
// measureTime("while loop", whileLoop);
// measureTime("for loop", forLoop);
// measureTime("for of loop", forOfLoop);
// measureTime("forEach loop", forEachLoop);
