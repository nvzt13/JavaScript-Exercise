
## [Exercise:Level 1](#exercise-level-1)
## [Exercise:Level 2](#exercise-level-2)
## [Exercise:Level 3](#exercise-level-3)



//----------------------------day3_level_1 1.exercise-------------------------\\
// # Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let name = "nevzat"
let lastName = "atalay"
let country = "turkey"
let city = "bitlis"
let age = 25
let isMarried = true

console.log(typeof(name),typeof(lastName),typeof(country),typeof(city),typeof(age),typeof(isMarried))

//----------------------------day3_level_1 2.exercise-------------------------\\
// # Check if type of '10' is equal to 10

let number ="10"
console.log(number==10)

//----------------------------day3_level_1 3.exercise-------------------------\\
// # Check if parseInt('9.8') is equal to 10

let number = parseInt(9.8)
console.log(number==10)

//----------------------------day3_level_1 4.exercise-------------------------\\
// # Boolean value is either true or false.

console.log(!!"merhaba")
console.log(!!1)
console.log(!![])

console.log(!!"")
console.log(!!0)
console.log(!!null)

//----------------------------day3_level_1 5.exercise-------------------------\\
// # Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

const arr = [
    4 > 3,
    4 >= 3,
    4 < 3,
    4 <= 3,
    4 == 4,
    4 === 4,
    4 != 4,
    4 !== 4,
    4 != '4',
    4 == '4',
    4 === '4',
    ]
console.log(arr)

let string = "phyton", string1 = "jargon"
console.log(string.length >= string1.length )

//----------------------------day3_level_1 6.exercise-------------------------\\
// # Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()


const arr = [
    4 > 3 && 10 < 12,
    4 > 3 && 10 > 12,
    4 > 3 || 10 < 12,
    4 > 3 || 10 > 12,
    !(4 > 3),
    !(4 < 3),
    !(false),
    !(4 > 3 && 10 < 12),
    !(4 > 3 && 10 > 12),
    !(4 === '4')]
    console.log(arr)


let string = "phyton", string1 = "jargon"
console.log(string.includes("on") && string1.includes("on"))

//----------------------------day3_level_1 7.exercise-------------------------\\
// # Use the Date object to do the following activities

let now = new Date()

console.log(now.getFullYear())
console.log(now.getMonth()+1)
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())


//___________________________starting_exercise_level_2_______________________\\

//----------------------------day3_level_2 1.exercise-------------------------\\
// # Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let width =Number(prompt("üçgenin genişligini giriniz"))
let height =Number(prompt("üçgenin yğksekliğini giriniz"))
let area = width*height / 2
console.log(area)

//----------------------------day3_level_2 2.exercise-------------------------\\
// # Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let width =Number(prompt("üçgenin a kenarını  giriniz"))
let height =Number(prompt("üçgenin yüksekliğini giriniz"))
let widthb = Number(prompt("üçgenin b kenarını giriniz"))
let perimeter = width+height+widthb
console.log(perimeter)

//----------------------------day3_level_2 3.exercise-------------------------\\
// # Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let width = Number(prompt("dikdörtgenin  genişliğini  giriniz"))
let height = Number(prompt("dikdörtgenin yüksekliğini giriniz"))
let perimeter = 2*(width+height) 
console.log(perimeter)

//----------------------------day3_level_2 4.exercise-------------------------\\
// # Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let r = 5
let area = Math.PI  *  r**2
console.log(area)

//----------------------------day3_level_2 5.exercise-------------------------\\
// # Calculate the slope, x-intercept and y-intercept of y = 2x -2

let slope = 2 //x in katsayısı egimi verir
let x_intercept = 1
let y_intercept = 2
console.log(`denklemin eğimi ${slope}, x in kesme noktası ${x_intercept}, y nin kesme noktası ${y_intercept} dir`)

//----------------------------day3_level_2 6.exercise-------------------------\\
// # Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let x1 =2 , x2 = 6
let y1 = 2 ,y2 =10
let slope =( y2 - y1 ) / (x2 - x1)
console.log(slope)

//----------------------------day3_level_2 7.exercise-------------------------\\
// # Compare the slope of above two questions.

let slope1 = 2
let slope2 = 2
console.log(slope1==slope2)

//----------------------------day3_level_2 8.exercise-------------------------\\
// # Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

let y = (x + 3)**2
let x = [-3,-2,-1,0,1,2,3]
y nin 0 debuggeri için x -3tür

//----------------------------day3_level_2 9.exercise-------------------------\\
// # Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hours = Number(prompt("günde kaç saat çalışıyorsunuz"))
let workingWage = Number(prompt("saatlik çalışma ücretinizi giriniz"))
let wage = hours*workingWage*30
console.log(`maaşınız ${wage} tl dir`)


//----------------------------day3_level_2 10.exercise-------------------------\\
// # If the length of your name is greater than 7 say, your name is long else say your name is short.

let myName = "nevzat"
if(myName.length > 7){
    console.log("adınız uzundur")
}
else{
    console.log("adınız kıssadır")
}


//----------------------------day3_level_2 11.exercise-------------------------\\
// # Compare your first name length and your family name length and you should get this output.

let myName = "nevzat"
let myLastName = "talay"
if(myName.length > myLastName.length){
 console.log(`adınız nevzat soyadınız atalaydan daha uzundur`)   
}
else{
    console.log("soyadınız atalay adınız nevzattan daha uzundur")
}


//----------------------------day3_level_2 12.exercise-------------------------\\
// # Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge =25
let yourAge =18
let message = myAge - yourAge > yourAge - myAge ? "ben senden büyüğüm" : "sen benden büyüksün"
console.log(message)


//----------------------------day3_level_2 13.exercise-------------------------\\
// # Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let birtYear = Number(prompt("doğum yılınızı giriniz"))
let now = new Date()
let year = now.getFullYear()
let age = year - birtYear
if(age >=18){
    console.log("ehliyet sınavına başvuru yapabilirsiniz")
}
else{
    console.log(`ehliyet sınavına başvuru yapabilmeniz için ${18-age} yıl beklemeniz gerekmektedir`)
}


//----------------------------day3_level_2 14.exercise-------------------------\\
// # Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

let age = Number(prompt("kaç yaşındasınız"))
let lastSecond = age*365*24*60*60
let remainingSeconds = (100*365*24*60*60) - (lastSecond)
console.log(`en fazla ${remainingSeconds} saniye ömrÜn kaldı WAKW UP`)


//----------------------------day3_level_2 15.exercise-------------------------\\
// # Create a human readable time format using the Date time object

let now = new Date()

let year = now.getFullYear()
let mount = now.getMonth()
let day = now.getDay()
let hours = now.getHours()
let minuts = now.getMinutes()

console.log(`${year}-${mount}-${day}           ${hours} : ${minuts}`)
console.log(`${day}-${mount}-${year}           ${hours} : ${minuts}`)
console.log(`${year} / ${mount} / ${day}       ${hours} : ${minuts}`)


//___________________________starting_exercise_level_3_______________________\\


//----------------------------day3_level_3 1.exercise-------------------------\\
// # Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

let now = new Date()

let year = now.getFullYear()
let mount = String(now.getMonth()+1).padStart(2,'0')
let day = String(now.getDate() ).padStart(2,'0')
let hour = String(now.getHours()).padStart(2,'0')
let minut = String(now.getMinutes()).padStart(2,'0')
console.log(`${day} / ${mount} / ${year} ${hour} : ${minut}`)
