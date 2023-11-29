//----------------------------day9_level_1 1.exercise-------------------------\\


//----------------------------day9_level_1 2.exercise-------------------------\\

const callback = (n) => {return n**2}
function cube(callback,n){
return callback(n) * n}
console.log(cube(callback,3))


//----------------------------day9_level_1 3.exercise-------------------------\\

const countries = ['turkiye','sırıa','japan','germany']
countries.forEach((element => console.log(element)) )


//----------------------------day9_level_1 4.exercise-------------------------\\

const names = ['nevzat','atalay','gül','atalay']
names.forEach(name1 => console.log(name1))


//----------------------------day9_level_1 5.exercise-------------------------\\

const numbers = [15,43, 56,78,25,2030]
numbers.forEach(num => console.log(num))


//----------------------------day9_level_1 6.exercise-------------------------\\

const countries = ['turkiye','sırıa','japan','germany']
const upperCase =countries.map((upper) => upper.toUpperCase())
console.log(upperCase)


//----------------------------day9_level_1 7.exercise-------------------------\\

const countries = ['turkiye','sırıa','japan','germany']
const newArr = countries.map((new1) => new1.length > 5)
console.log(newArr)


//----------------------------day9_level_1 8.exercise-------------------------\\

const numbers = [2,3,4,5,6]
const square = numbers.map((num) => num**2)
console.log(square)


//----------------------------day9_level_1 9.exercise-------------------------\\

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const newArr = names.map((name1) => name1.toUpperCase())
console.log(newArr)



//----------------------------day9_level_1 11.exercise-------------------------\\

const countries = ['Finland','Iceland','Grönland','Turkey','Germany']
const newArr = countries.filter((new1) => new1.includes('land'))
console.log(newArr)



//----------------------------day9_level_1 12.exercise-------------------------\\

const countries = ['Finland','Icelan','Grönland','Turkey','Germany',]
const newArr = countries.filter((new1) => new1.length ==6)
console.log(newArr)


//----------------------------day9_level_1 13.exercise-------------------------\\

const countries = ['Finland','Iceland','Grönland','Turkey','Germany']
const newArr = countries.filter((new1) => new1.length > 6)
console.log(newArr)


//----------------------------day9_level_1 14.exercise-------------------------\\

const countries = ['Finland','Iceland','Grönland','Turkey','Germany','England','Estonia']
const newArr =countries.filter((new1) => new1.startsWith('E'))
console.log(newArr)


//----------------------------day9_level_1 15.exercise-------------------------\\

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];
  
  const filteredProducts = products.filter(product => product.price !== '' && product.price !== ' ');
  console.log(filteredProducts);
  

//----------------------------day9_level_1 16.exercise-------------------------\\

const arr = ['ali', 'veli', 'küpeli']

function getStringList(){
   let newArr= []
     arr.map(string => newArr.push(string) )
     return  console.log(newArr)
}
getStringList(arr)


//----------------------------day9_level_1 17.exercise-------------------------\\

const numbers = [2,3,4,5,6]
let sum = numbers.reduce((acc,cur) => acc + cur )
console.log(sum)

----------------------------day9_level_1 18.exercise-------------------------\\

----------------------------day9_level_1 19.exercise-------------------------\\

----------------------------day9_level_1 20.exercise-------------------------\\


const names = ['nevzat','atalay','gül','atalay']
const newArr = names.some((name1) => name1.length > 5)
console.log(newArr)


//----------------------------day9_level_1 21.exercise-------------------------\\


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newArr = countries.every((count) => count.includes('land') )
console.log(newArr)


//----------------------------day9_level_1 22.exercise-------------------------\\

//----------------------------day9_level_1 23.exercise-------------------------\\


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newArr = countries.find((count) => count.length == 6)
console.log(newArr)

//----------------------------day9_level_1 24.exercise-------------------------\\


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newArr = countries.findIndex((count) => count.length == 6)
console.log(newArr)


//----------------------------day9_level_1 25.exercise-------------------------\\


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newArr = countries.findIndex((count) => count.includes("Norway"))
console.log(newArr)


//----------------------------day9_level_1 26.exercise-------------------------\\


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newArr = countries.findIndex((count) => count.includes("russia"))
console.log(newArr)



//___________________________starting_exercise_level_2_______________________\\

//----------------------------day9_level_2 1.exercise-------------------------\\
//----------------------------day9_level_2 2.exercise-------------------------\\
//----------------------------day9_level_2 3.exercise-------------------------\\
//----------------------------day9_level_2 4.exercise-------------------------\\
//----------------------------day9_level_2 5.exercise-------------------------\\
//----------------------------day9_level_2 6.exercise-------------------------\\
//----------------------------day9_level_2 7.exercise-------------------------\\


//___________________________starting_exercise_level_3_______________________\\

//----------------------------day9_level_3 1.exercise-------------------------\\
//----------------------------day9_level_3 2.exercise-------------------------\\
//----------------------------day9_level_3 3.exercise-------------------------\\
//----------------------------day9_level_3 4.exercise-------------------------\\