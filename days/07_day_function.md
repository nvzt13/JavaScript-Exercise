# Day 7 - Functions
 


## [Exercise](#exercise)

### [Exercises:Level 1](#exercises-level-1)
### [Exercises:Level 2](#exercises-level-2)
### [Exercises:Level 3](#exercises-level-3)

## [Exercise:Answers](#exercise-answers)


### [Exercise Answers:Level 1](#exercise-answers-level-1)
### [Exercise Answers:Level 2](#exercise-answers-level-2)
### [Exercise Answers:Level 3](#exercise-answers-level-3) <hr>

 #### [Home](../README.md) | [<< Day 6](./06_day_loops.md) | [Day 8 >>](./08_day_object.md)

## Exercise

### Exercises Level 1

1. Declare a function _fullName_ and it print out your full name.
2. Declare a function _fullName_ and now it takes firstName, lastName as a parameter and it returns your full - name.
3. Declare a function _addNumbers_ and it takes two two parameters and it returns sum.
4. An area of a rectangle is calculated as follows: _area = length x width_. Write a function which calculates _areaOfRectangle_.
5. A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_. Write a function which calculates _perimeterOfRectangle_.
6. A volume of a rectangular prism is calculated as follows: _volume = length x width x height_. Write a function which calculates _volumeOfRectPrism_.
7. Area of a circle is calculated as follows: _area = π x r x r_. Write a function which calculates _areaOfCircle_
8. Circumference of a circle is calculated as follows: _circumference = 2πr_. Write a function which calculates _circumOfCircle_
9. Density of a substance is calculated as follows:_density= mass/volume_. Write a function which calculates _density_.
10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, _speed_.
11. Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which calculates _weight_.
12. Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a function which convert oC to oF _convertCelsiusToFahrenheit_.
13. Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) in m2_. Write a function which calculates _bmi_. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is _underweight, normal, overweight_ or _obese_ based the information given below.

    - The same groups apply to both men and women.
    - _Underweight_: BMI is less than 18.5
    - _Normal weight_: BMI is 18.5 to 24.9
    - _Overweight_: BMI is 25 to 29.9
    - _Obese_: BMI is 30 or more

14. Write a function called _checkSeason_, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

    ```js
    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0
    ```
  
### Exercises Level 2

1. Linear equation is calculated as follows: _ax + by + c = 0_. Write a function which calculates value of a linear equation, _solveLinEquation_.
1. Quadratic equation is calculated as follows: _ax2 + bx + c = 0_. Write a function which calculates value or values of a quadratic equation, _solveQuadEquation_.

    ```js
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
    ```

1. Declare a function name _printArray_. It takes array as a parameter and it prints out each value of the array.
1. Write a function name _showDateTime_ which shows time in this format: 08/01/2020 04:08 using the Date object.

    ```sh
    showDateTime()
    08/01/2020 04:08
    ```

1. Declare a function name _swapValues_. This function swaps value of x to y.

    ```js
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
    ```

1. Declare a function name _reverseArray_. It takes array as a parameter and it returns the reverse of the array (don't use method).

    ```js
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
    ```

1. Declare a function name _capitalizeArray_. It takes array as a parameter and it returns the - capitalizedarray.
1. Declare a function name _addItem_. It takes an item parameter and it returns an array after adding the item
1. Declare a function name _removeItem_. It takes an index parameter and it returns an array after removing an item
1. Declare a function name _sumOfNumbers_. It takes a number parameter and it adds all the numbers in that range.
1. Declare a function name _sumOfOdds_. It takes a number parameter and it adds all the odd numbers in that - range.
1. Declare a function name _sumOfEven_. It takes a number parameter and it adds all the even numbers in that - range.
1. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

    ```sh
    evensAndOdds(100);
    The number of odds are 50.
    The number of evens are 51.
    ```

1. Write a function which takes any number of arguments and return the sum of the arguments

    ```js
    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10
    ```

1. Writ a function which generates a _randomUserIp_.
1. Write a function which generates a _randomMacAddress_
1. Declare a function name _randomHexaNumberGenerator_. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

    ```sh
    console.log(randomHexaNumberGenerator());
    '#ee33df'
    ```

1. Declare a function name _userIdGenerator_. When this function is called it generates seven character id. The function return the id.

    ```sh
    console.log(userIdGenerator());
    41XTDbE
    ```

### Exercises Level 3

1. Modify the _userIdGenerator_ function. Declare a function name _userIdGeneratedByUser_. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

    ```sh
    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
    ```

1. Write a function name _rgbColorGenerator_ and it generates rgb colors.

    ```sh
    rgbColorGenerator()
    rgb(125,244,255)
    ```

1. Write a function **_arrayOfHexaColors_** which return any number of hexadecimal colors in an array.
1. Write a function **_arrayOfRgbColors_** which return any number of RGB colors in an array.
1. Write a function **_convertHexaToRgb_** which converts hexa color to rgb and it returns an rgb color.
1. Write a function **_convertRgbToHexa_** which converts rgb to hexa color and it returns an hexa color.
1. Write a function **_generateColors_** which can generate any number of hexa or rgb colors.

    ```js
    console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors('hexa', 1)) // '#b334ef'
    console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
    ```

1. Call your function _shuffleArray_, it takes an array as a parameter and it returns a shuffled array
1. Call your function _factorial_, it takes a whole number as a parameter and it return a factorial of the number
1. Call your function _isEmpty_, it takes a parameter and it checks if it is empty or not
1. Call your function _sum_, it takes any number of arguments and it returns the sum.
1. Write a function called _sumOfArrayItems_, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
1. Write a function called _average_, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
1. Write a function called _modifyArray_ takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

    ```js
    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
    ```

    ```sh
    ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    ```

    ```sh
    ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    ```

    ```sh
      'Not Found'
    ```

1. Write a function called _isPrime_, which checks if a number is prime number.
1. Write a functions which checks if all items are unique in the array.
1. Write a function which checks if all the items of the array are the same data type.
1. JavaScript variable name does not support special characters or symbols except \$ or \_. Write a function **isValidVariable** which check if a variable is valid or invalid variable.
1. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

    ```js
    sevenRandomNumbers()
    [(1, 4, 5, 7, 9, 8, 0)]
    ```

1. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

## Exercise Answers

## Exercise Answers Level 1

1.  Declare a function fullName and it print out your full name.

```js
//app.js

function fullName(){
    console.log("nevzat atalay")
}
fullName()

```

2.  Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
```js
//app.js

function fullName(name,lastname){
    let str="  "
    console.log(name + str + lastname)
}
fullName('nevzat','atalay')
```


 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
```js
//app.js

function addNumbers(num1,num2){
    let sum =0
        sum += num1 + num2
        return  sum
}
console.log(addNumbers(7,8))
```


4.  An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
```js
//app.js

function areaOfRengle(width,length){
    area = width * length
        return  area
}
console.log(areaOfRengle(7,8))
```


5.  A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
```js
//app.js

function perimeterOfRengle(width,length){
    perimeter = 2 * (width + length)
        return  perimeter
}
console.log(perimeterOfRengle(7,8))
```


6.  A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
```js
//app.js

function volumeOfRengle(width,length,height){
    volume = width * length *height
        return  volume
}
console.log(volumeOfRengle(7,8,9))
```


 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
```js
//app.js

function areaCircle(r){
    area = Math.floor(Math.PI)*r*r
    return area
}
console.log(areaCircle(3))
```


8.  Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
```js
//app.js

function ferenceCircle(r){
    ference = 2 *  Math.floor(Math.PI)*r
    return ference
}
console.log(ferenceCircle(3))
```


9.  Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
```js
//app.js

function densitySubtance(mass,volume){
    density = mass/volume
    return volume
}
console.log(densitySubtance(10,2))
```


 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
```js
//app.js

function speedDivid(distance,time){

    speed = distance/time
    return speed
}
console.log(speedDivid(100,2))
```


11.  Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
```js
//app.js

function weightSubtance(mass,gravity){
    weight = mass * gravity
    return weight
}
console.log(weightSubtance(5,10))
```


 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
```js
//app.js

function convertCelciusToFahrenheit(celcius){
    fahrenheit = (celcius * 9/5) + 32
return fahrenheit
}
console.log(convertCelciusToFahrenheit(1))
```


 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
```
- The same groups apply to both men and women.
- Underweight: BMI is less than 18.5
- Normal weight: BMI is 18.5 to 24.9
- Overweight: BMI is 25 to 29.9
- Obese: BMI is 30 or more
```
```js
//app.js

function bmiPeople(weight,height,){

    bmi = weight/(height*height)
if(bmi <=18.5){
    console.log('Underweight')
    return
}
else if(bmi >=18.5 && bmi <=24.9 ){
    console.log('Normal weight')
    return

}
else if(bmi >= 25 && bmi <=29.9){
    console.log('Overweight')
    return
}
else if(bmi >=30){
    console.log('Obese')
    return
}
else{
    console.log('letfen degerlerinizikontrol ediniz')
}
}
bmiPeople(100,1.54)
```


14.  Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
```js
//app.js

function checkSeason(mount){
    if(mount=='september' || mount=='november' ||mount=='october' ){
        console.log('season is Autum')
    }
    else if(mount=='december' || mount=='january' ||mount=='february' ){
        console.log('season is winter')
    }
    else if(mount=='march' || mount=='may' ||mount=='april' ){
        console.log('season is spring')
    }
}
checkSeason('september')
```


 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
```
console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
```

```js
//app.js
function findMaxNumber(a,b,c){

    maxnumber = Math.max(a,b,c)
    return maxnumber
}
console.log(findMaxNumber(3,5,7))
```

## Exercise Answers Level 2

 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
```js
//app.js

function solveLinEquation(a, b, c, x) {
  // ax + by + c = 0 denkleminde x değeri verildiğinde y değerini hesaplar
  // y = (-c - ax) / b formülünü kullanır
  // a, b, c, x sayısal değerler olmalıdır
  // b sıfır olmamalıdır
  // y değeri sayısal olarak döndürülür
  if (b === 0) {
    throw new Error("b değeri sıfır olamaz");
  }
  let y = (-c - a * x) / b;
  return y;
}
let a = solveLinEquation(3,5,7,8)

console.log(a)
```


 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
```
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
```
```js
//app.js

// solventQuadEquation fonksiyonu tanımlanıyor
function solventQuadEquation(a, b, c) {
  // diskriminant hesaplanıyor
  let d = b * b - 4 * a * c;
  // diskriminantın sıfırdan büyük veya eşit olup olmadığı kontrol ediliyor
  if (d >= 0) {
    // diskriminantın karekökü alınıyor
    let sqrt_d = Math.sqrt(d);
    // denklemin kökleri hesaplanıyor
    let x1 = (-b + sqrt_d) / (2 * a);
    let x2 = (-b - sqrt_d) / (2 * a);
    // kökleri bir dizi olarak döndürüyor
    return [x1, x2];
  } else {
    // diskriminant negatif ise, hata mesajı döndürüyor
    return "Denklemin gerçek kökü yoktur.";
  }
}

// denklemin katsayıları 
let a = 1;
let b = -5;
let c = 6;

// fonksiyon çağrılıyor ve sonucu yazdırılıyor
console.log(solventQuadEquation(a, b, c));

```

 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
```js
//app.js

const arr = [1,2,3,4,5,6,7]

function printArr(){
    for(const num of arr){
        console.log(num)
    }
}
printArr(arr)
```


4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
```
showDateTime()
08/01/2020 04:08
```
```js
//app.js

function showDateTime(){

    let now = new Date();

let day = now.getDate()
let mount = now.getMonth() +1
let year = now.getFullYear()
let hours = now.getHours()
let minut  = now.getMinutes()

if(day<10){
    day = '0'+ day
}
if(mount<10){
    mount = '0' + mount
}
if(hours<10){
    hours = '0' + hours
}
if(minut<10){
    minut = '0' + minut
}

return console.log(`${day}/${mount}/${year}  ${hours}:${minut} `)

}
showDateTime()

```


5. Declare a function name swapValues. This function swaps value of x to y.
```
swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
```
```js
//app.js

function swapValue(x,y){

    let changeX = y
    let changeY = x
    return  console.log(`${changeX},${changeY}`)}
    swapValue(5,4)

```

 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
```
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
```
```js
//app.js

const arr = [1,2,3,4,5,6,7]

function reverseArr(){
    return console.log(arr.reverse())
}
reverseArr(arr)
```


 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
```js
//app.js

const arr = ['nevzat', 'atalay', 'bitlis']

arr.forEach(word => {
    console.log( word.toUpperCase())  
})
```


 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
```js
//app.js

function addItem(text){
    arr = text.split(" ")
    return arr
  }
  console.log(addItem('Nevzat Atalay Bitlis'))
```

  
 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
```js
//app.js

function removeItem(index) {
    array = [1,2,3,4,5,6,7,8,9]
    assume the array is defined globally
    var newArray = array.slice(); // make a copy of the array
    newArray.splice(index, 2); // remove the item at the given index
    return newArray; // return the new array
  }
  console.log(removeItem(2))
```

  
 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
```js
//app.js

function sumOfNumbers(number){
    
    let sum = 0;
    for(let i=1; i<=number; i++){
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers(5));
```


11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
```js
//app.js

function sumOfOddNumbers(number){
    
    let sum = 0;
    for(let i=1; i<=number; i+=2){
        sum += i;
    }
    return sum;
}
console.log(sumOfOddNumbers(4));
```



12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
```js
//app.js

function sumOfEvenNumbers(number){
    
    let sum = 0;
    for(let i=0; i<=number; i+=2){
        sum += i;
    }
    return sum;
}
console.log(sumOfEvenNumbers(4));
```


13. parameter and it counts number of evens and odds in the number.
```
evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.
```
```js
//app.js

eventsAndOdds(100)

function eventsAndOdds(number){
 
  let event=0
  let odd = 0
  for(let i =0; i<=number; i++){
     if(i%2 ==0){
       event = event +1
     }
     else{
       odd = odd +1
     }
  }
  console.log(`Number is includes ${event} event and ${odd} odd number`)
}

```

14. Write a function which takes any number of arguments and return the sum of the arguments
```
sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10
```
```js
//app.js

function sumNumbers(number1,number2,number3){
    let sum = number1+number2+number3
  
   return console.log(sum)
 }
 sumNumbers(1,2,3,)
```


 15. Writ a function which generates a randomUserIp.
```js
//app.js

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomUserIp(){
    const ip = [getRandomInt(0,255),getRandomInt(0,255),getRandomInt(0,255),getRandomInt(0,255)]
    return ip.join('.')
  }
  console.log(randomUserIp())

```

  
 16. Write a function which generates a randomMacAddress

```js
//app.js

function getRandomHex(){
    const arr = ['0',"1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    return arr[Math.floor(Math.random()*arr.length)]
  }
  
  function randomMacAdres(){
  
  const mac = [getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex(), getRandomHex() + getRandomHex()
  
  ]
  return mac.join(':')
  }
  console.log(randomMacAdres())
  ```
  

17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
```
console.log(randomHexaNumberGenerator());
'#ee33df'
```
```js
//app.js

function ranfomHexzadecimal(){
    let text = '0123456789ABCDEF'
     let hex = '#'
     for(let i=0; i<6; i++){
      let index = Math.floor(Math.random()*text.length)
      hex += text[index]
     }
     return hex
  }

  console.log(ranfomHexzadecimal())
  ```

18.  Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
```
console.log(userIdGenerator());
41XTDbE
```
```js
//app.js

function userIdGenerator(){
    let text = '0123456789ABCDEFGHJKLMNOPRSŞTOVYZabcdefghojklmnprsştvyz'
     let id = ''
     for(let i=0; i<7; i++){
      let index = Math.floor(Math.random()*text.length)
      id += text[index]
     }
     return id
  }
  console.log(userIdGenerator())
```

## Exercise Answers Level 3


 #### [Home](../README.md) | [<< Day 6](./06_day_loops.md) | [Day 8 >>](./08_day_object.md)