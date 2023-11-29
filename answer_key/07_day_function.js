//---------------------------day7_level_1 1.exercise ------------------------\\

// function fullName(){
//     console.log("nevzat atalay")
// }
// fullName()
//---------------------------day7_level_1 2.exercise ------------------------\\

// function fullName(name,lastname){
//     let str="  "
//     console.log(name + str + lastname)
// }
// fullName('nevzat','atalay')

//---------------------------day7_level_1 3.exercise ------------------------\\

// function addNumbers(num1,num2){
//     let sum =0
//         sum += num1 + num2
//         return  sum
// }
// console.log(addNumbers(7,8))

//---------------------------day7_level_1 4.exercise ------------------------\\

// function areaOfRengle(width,length){
//     area = width * length
//         return  area
// }
// console.log(areaOfRengle(7,8))

//---------------------------day7_level_1 5.exercise ------------------------\\

// function perimeterOfRengle(width,length){
//     perimeter = 2 * (width + length)
//         return  perimeter
// }
// console.log(perimeterOfRengle(7,8))

//---------------------------day7_level_1 6.exercise ------------------------\\

// function volumeOfRengle(width,length,height){
//     volume = width * length *height
//         return  volume
// }
// console.log(volumeOfRengle(7,8,9))

//---------------------------day7_level_1 7.exercise ------------------------\\

// function areaCircle(r){
//     area = Math.floor(Math.PI)*r*r
//     return area
// }
// console.log(areaCircle(3))

//---------------------------day7_level_1 8.exercise ------------------------\\

// function ferenceCircle(r){
//     ference = 2 *  Math.floor(Math.PI)*r
//     return ference
// }
// console.log(ferenceCircle(3))

//---------------------------day7_level_1 9.exercise ------------------------\\

// function densitySubtance(mass,volume){
//     density = mass/volume
//     return volume
// }
// console.log(densitySubtance(10,2))

//---------------------------day7_level_1 10.exercise ------------------------\\

// function speedDivid(distance,time){

//     speed = distance/time
//     return speed
// }
// console.log(speedDivid(100,2))

//---------------------------day7_level_1 11.exercise ------------------------\\

// function weightSubtance(mass,gravity){
//     weight = mass * gravity
//     return weight
// }
// console.log(weightSubtance(5,10))

//---------------------------day7_level_1 12.exercise ------------------------\\

// function convertCelciusToFahrenheit(celcius){
//     fahrenheit = (celcius * 9/5) + 32
// return fahrenheit
// }
// console.log(convertCelciusToFahrenheit(1))

//---------------------------day7_level_1 13.exercise ------------------------\\

// function bmiPeople(weight,height,){

//     bmi = weight/(height*height)
// if(bmi <=18.5){
//     console.log('Underweight')
//     return
// }
// else if(bmi >=18.5 && bmi <=24.9 ){
//     console.log('Normal weight')
//     return

// }
// else if(bmi >= 25 && bmi <=29.9){
//     console.log('Overweight')
//     return
// }
// else if(bmi >=30){
//     console.log('Obese')
//     return
// }
// else{
//     console.log('letfen degerlerinizikontrol ediniz')
// }
// }
// bmiPeople(100,1.54)

//---------------------------day7_level_1 14.exercise ------------------------\\

// function checkSeason(mount){
//     if(mount=='september' || mount=='november' ||mount=='october' ){
//         console.log('season is Autum')
//     }
//     else if(mount=='december' || mount=='january' ||mount=='february' ){
//         console.log('season is winter')
//     }
//     else if(mount=='march' || mount=='may' ||mount=='april' ){
//         console.log('season is spring')
//     }
// }
// checkSeason('september')

//---------------------------day7_level_1 15.exercise ------------------------\\

// function findMaxNumber(a,b,c){

//     maxnumber = Math.max(a,b,c)
//     return maxnumber
// }
// console.log(findMaxNumber(3,5,7))

//___________________________starting_exercise_level_2_______________________\\

//---------------------------day7_level_2 1.exercise ------------------------\\
//---------------------------day7_level_2 2.exercise ------------------------\\
//---------------------------day7_level_2 3.exercise ------------------------\\

// const arr = [1,2,3,4,5,6,7]

// function printArr(){
//     for(const num of arr){
//         console.log(num)
//     }
// }
// printArr(arr)

//---------------------------day7_level_2 4.exercise ------------------------\\

// function showDateTime(){

//     let now = new Date();

// let day = now.getDate()
// let mount = now.getMonth() +1
// let year = now.getFullYear()
// let hours = now.getHours()
// let minut  = now.getMinutes()

// if(day<10){
//     day = '0'+ day
// }
// if(mount<10){
//     mount = '0' + mount
// }
// if(hours<10){
//     hours = '0' + hours
// }
// if(minut<10){
//     minut = '0' + minut
// }

// return console.log(`${day}/${mount}/${year}  ${hours}:${minut} `)

// }
// showDateTime()

//---------------------------day7_level_2 5.exercise ------------------------\\

// function swapValue(x,y){

    // let changeX = y
    // let changeY = x
    // return  console.log(`${changeX},${changeY}`)}
    // swapValue(5,4)

//---------------------------day7_level_2 6.exercise ------------------------\\

// const arr = [1,2,3,4,5,6,7]

// function reverseArr(){
//     return console.log(arr.reverse())
// }
// reverseArr(arr)

//---------------------------day7_level_2 7.exercise ------------------------\\

// const arr = ['nevzat', 'atalay', 'bitlis']

// arr.forEach(word => {
//     console.log( word.toUpperCase())  
// })

//---------------------------day7_level_2 8.exercise ------------------------\\

// function addItem(text){
//     arr = text.split(" ")
//     return arr
//   }
//   console.log(addItem('Nevzat Atalay Bitlis'))
  
//---------------------------day7_level_2 9.exercise ------------------------\\

// function removeItem(index) {
    // array = [1,2,3,4,5,6,7,8,9]
    // assume the array is defined globally
    // var newArray = array.slice(); // make a copy of the array
    // newArray.splice(index, 2); // remove the item at the given index
    // return newArray; // return the new array
//   }
//   console.log(removeItem(2))
  
  //--------------------------day7_level_2 10.exercise ------------------------\\

// function sumOfNumbers(number){
    
//     let sum = 0;
//     for(let i=1; i<=number; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumOfNumbers(5));

//---------------------------day7_level_2 11.exercise ------------------------\\

// function sumOfOddNumbers(number){
    
//     let sum = 0;
//     for(let i=1; i<=number; i+=2){
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumOfOddNumbers(4));

//---------------------------day7_level_2 12.exercise ------------------------\\

// function sumOfEvenNumbers(number){
    
//     let sum = 0;
//     for(let i=0; i<=number; i+=2){
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumOfEvenNumbers(4));

//---------------------------day7_level_2 13.exercise ------------------------\\

//---------------------------day7_level_2 14.exercise ------------------------\\

// function sumNumbers(number1,number2,number3){
//     let sum = number1+number2+number3
  
//    return console.log(sum)
//  }
//  sumNumbers(1,2,3,)

//---------------------------day7_level_2 15.exercise ------------------------\\

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   function randomUserIp(){
//     const ip = [getRandomInt(0,255),getRandomInt(0,255),getRandomInt(0,255),getRandomInt(0,255)]
//     return ip.join('.')
//   }
//   console.log(randomUserIp())

  
//---------------------------day7_level_2 16.exercise ------------------------\\

// function getRandomHex(){
//     const arr = ['0',"1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
//     return arr[Math.floor(Math.random()*arr.length)]
//   }
  
//   function randomMacAdres(){
  
//   const mac = [getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex()
  
//   ]
//   return mac.join(':')
//   }
//   console.log(randomMacAdres())
  

//---------------------------day7_level_2 17.exercise ------------------------\\

// function ranfomHexzadecimal(){
//     let text = '0123456789ABCDEF'
//      let hex = '#'
//      for(let i=0; i<6; i++){
//       let index = Math.floor(Math.random()*text.length)
//       hex += text[index]
//      }
//      return hex
//   }

//   console.log(ranfomHexzadecimal())

//---------------------------day7_level_2 18.exercise ------------------------\\

// function userIdGenerator(){
//     let text = '0123456789ABCDEFGHJKLMNOPRSŞTOVYZabcdefghojklmnprsştvyz'
//      let id = ''
//      for(let i=0; i<7; i++){
//       let index = Math.floor(Math.random()*text.length)
//       id += text[index]
//      }
//      return id
//   }
//   console.log(userIdGenerator())

//___________________________starting_exercise_level_3_______________________\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\

//---------------------------day7_level_3 1.exercise ------------------------\\
