//todo day2_level1 1.exercise
// let challenge = '30 days of javascript'


//todo day2_level1 2.exercise
// let challenge = '30 days of javascript'
// console.log(challenge)


//todo day2_level1 3.exercise
// let challenge = '30 days of javascript'
// console.log(challenge.length)


//todo day2_level1 4.exercise
// let challenge = '30 days of javascript'
// console.log(challenge.toUpperCase())


//todo day2_level1 5.exercise
// let challenge = '30 days of javascript'
// console.log(challenge.toLowerCase())


//todo day2_level1 6.exercise
// let challenge = '30 days of javascript'
// console.log(challenge.substring(3,5))


//todo day2_level1 7.exercise
// let challenge = '30 days of javascript'
// let newChallenge = challenge.slice(3,10)
// console.log(newChallenge)


//tododay2_level1 8.exercise
// let challenge = '30 days of javascript'
// console.log(challenge.includes('script')


//tododay2_level1 9.exercise
// let challenge = '30 days of javascript'
// console.log(challenge.split(""))


//tododay2_level1 10.exercise
// let challenge = '30 days of javascript'
// console.log(challenge.split(" "))


//tododay2_level1 11.exercise
// let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle,Amazon' 
// console.log(companies.split(`,`))


//tododay2_level1 12.exercise
// let challenge = "30 days of javascript"
// console.log(challenge.replace("javascript","phyton"))


//tododay2_level1 13.exercise
// let challenge = "30 days of javascript"
// console.log(challenge.charAt(15))


//tododay2_level1 14.exercise
// let challenge = "30 days of javascript"
// console.log(challenge.charCodeAt("j"))


///tododay2_level1 15.exercise
// let challenge = "30 days of javascript"
// console.log(challenge.indexOf("a"))


//tododay2_level1 16.exercise
// let challenge = "30 days of javascript"
// console.log(challenge.lastIndexOf("a"))


//tododay2_level1 17.exercise
// let challenge = "You cannot end a sentence with because because is a conjunction."
// console.log(challenge.indexOf("because"))


//tododay2_level1 18.exercise
// let challenge = "You cannot end a sentence with because because is a conjunction."
// console.log(challenge.lastIndexOf("because"))


//tododay2_level1 19.exercise
// let challenge = "You cannot end a sentence with because because is a conjunction."
// console.log(challenge.search("because"))


//tododay2_level1 20.exercise
// let challenge = "30 Days Of JavaScript       "
// console.log(challenge.trim())


//tododay2_level1 21.exercise
// let challenge = "30 Days Of JavaScript"
// console.log(challenge.startsWith(30))


//tododay2_level1 22.exercise
// let challenge = "30 Days Of JavaScript"
// console.log(challenge.endsWith("JavaScript"))


//tododay2_level1 23.exercise
// let challenge = "30 Days Of JavaScript"
// console.log(challenge.match("a"))


//tododay2_level1 24.exercise
// let challenge = "30 Days Of "
// let challenge1 = "JavaScript"
// console.log(challenge.concat(challenge1)


//tododay2_level1 25.exercise
// let challenge = "30 Days Of JavaScript"
// console.log(challenge.repeat(2))


//? day2_level2 1.exercise

// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

//? day2_level2 2.exercise

// console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//? day2_level2 3.exercise

// let number = "10"
// console.log(number===10)

// let number1 = 10
// console.log(number1===10)

//? day2_level2 4.exercise

// let number =parseFloat(9.8)
// console.log(number===10)

// let number1 = Math.ceil(parseFloat(9.8))
// console.log(number1===10)

//? day2_level2 5.exercise

// let string = "phyton" 
// let string1 ="jargon"
// console.log(string.includes("on") && string1.includes("on"))

//? day2_level2 6.exercise

// let string = "I hope this course is not full of jargon."
// console.log(string.includes("jargon"))

//? day2_level2 7.exercise

// console.log(parseInt(Math.random()*101))

//? day2_level2 8.exercise

// console.log(parseInt(Math.random()*51+50))

//? day2_level2 9.exercise

// console.log(parseInt(Math.random()*255))


//? day2_level2 10.exercise

// let string="javasicript"
// let n =parseInt(Math.random()*11)
// console.log(string[n])


//? day2_level2 11.exercise

// console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125 ")


//? day2_level2 12.exercise

// let string = "You cannot end a sentence with because because because is a conjunction"
// console.log(string.replace("because",""))

//! day2_leve3 1.exercise

// let string ="Love is the best thing in this world. Some found their love and some are still looking for their love."
// let count = string.match(/love/gi)||[].length
// console.log(count)

//! day2_leve3 2.exercise

// let sentence = "You cannot end a sentence with because because because is a conjunction"
// let count = sentence.match(/because/gi)||[].length
// console.log(count)

//! day2_leve3 3.exercise

// let messySentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
// let cleanSentence = messySentence.replace(/[^a-zA-Z ]/g, " ");

// let words = cleanSentence.split(' ');
// let wordCounts = {};
// for(let i = 0; i < words.length; i++) {
//     if(words[i] !== '') {
//         wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
//     }
// }

// let maxWord = '';
// let maxCount = 0;
// for(let word in wordCounts) {
//     if(wordCounts[word] > maxCount) {
//         maxCount = wordCounts[word];
//         maxWord = word;
//     }
// }

// console.log(`Most frequent word is '${maxWord}' with count ${maxCount}`);

//! day2_leve3 4.exercise

// let text ='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

// let pattern =/\d+/g
// let numbers = text.match(pattern)
// numbers = numbers.map(Number);

// let montlySalary = numbers[0]
// let bonus = numbers[1]
// let montlyCourses = numbers[2]

// console.log(`Annual income is ${montlySalary*12 + bonus + montlyCourses *12} euro `)







