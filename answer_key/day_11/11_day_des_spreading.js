//----------------------------day11_level_1 1.exercise-------------------------\\
// # Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const constants = [2.72, 3.14, 9.81, 37.5, 100]
const [E,PI,G,humanBodyTemp,waterBoilingTemp] =constants
console.log(E,PI,G,humanBodyTemp,waterBoilingTemp)

//----------------------------day11_level_1 2.exercise-------------------------\\
// #Destructure and assign the elements of countries array to fin, est, sw, den, nor

const countries =['Finland','Estonia','Sweden','Denmark','Norway']
const [fin,est,swd,den,nor] = countries
console.log(fin,est,swd,den,nor)



//----------------------------day11_level_1 3.exercise-------------------------\\
// #Destructure the rectangle object by its properties or keys.

const rectangle ={
    width:20,
    height:10,
    are:200,
    perimeter:60
}

const {width,height,are,perimeter} = rectangle
console.log(width,height,are,perimeter)


//___________________________starting_exercise_level_2_______________________\\



//----------------------------day11_level_2 1.exercise-------------------------\\
// # Iterate through the users array and get all the keys of the object using destructuring

const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]
    for( const {name,scores,skills,age} of users){
           console.log(name,scores,skills,age)
    }

//----------------------------day11_level_2 2.exercise-------------------------\\
// # Find the persons who have less than two skills

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
let a = users.forEach((element) => {
    if(element.skills.length <=2){
        console.log(element)
    }
})

//! exercise 1
//! exercise 2
//! exercise 3
//! exercise 4

