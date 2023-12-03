//----------------------------day9_level_1 1.exercise-------------------------\\
// # Explain the difference between forEach, map, filter, and reduce.

foreach dizideki her bir eleman için bir fonksiyon çalıştırir.Dizideki elemani degistirebilir ama yeni bir dizi olisturamaz.
map foreach ile aynidir farki map yeni bir dizi döndürür.
reduce, bir dizideki her öğe için belirtilen bir fonksiyonu çalıştırır ve bu fonksiyonun sonuçlarını biriktirerek tek bir değer döndürür. Bu fonksiyon, dizinin her öğesini değiştiremez, ancak bir önceki fonksiyon çağrısının sonucunu alarak bir sonraki fonksiyon çağrısına aktarır. 
filrer JavaScript’te filter metodu, bir dizideki elemanları belirli bir koşula göre filtrelemek için kullanılan bir dizidir. Filter metodu, orijinal diziyi değiştirmez, ancak koşulu sağlayan elemanlardan oluşan yeni bir dizi döndürür

//----------------------------day9_level_1 2.exercise-------------------------\\
// # Define a callback function before you use it in forEach, map, filter or reduce.

const callback = (n) => {return n**2}
function cube(callback,n){
return callback(n) * n}
console.log(cube(callback,3))


//----------------------------day9_level_1 3.exercise-------------------------\\
// # Use forEach to console.log each country in the countries array.

const countries = ['turkiye','sırıa','japan','germany']
countries.forEach((element => console.log(element)) )


//----------------------------day9_level_1 4.exercise-------------------------\\
// # Use forEach to console.log each name in the names array.

const names = ['nevzat','atalay','gül','atalay']
names.forEach(name1 => console.log(name1))


//----------------------------day9_level_1 5.exercise-------------------------\\
// # Use forEach to console.log each number in the numbers array.

const numbers = [15,43, 56,78,25,2030]
numbers.forEach(num => console.log(num))


//----------------------------day9_level_1 6.exercise-------------------------\\
// # Use map to create a new array by changing each country to uppercase in the countries array.

const countries = ['turkiye','sırıa','japan','germany']
const upperCase =countries.map((upper) => upper.toUpperCase())
console.log(upperCase)


//----------------------------day9_level_1 7.exercise-------------------------\\
// # Use map to create an array of countries length from countries array.

const countries = ['turkiye','sırıa','japan','germany']
const newArr = countries.map((new1) => new1.length > 5)
console.log(newArr)


//----------------------------day9_level_1 8.exercise-------------------------\\
// # Use map to create a new array by changing each number to square in the numbers array
  
const numbers = [2,3,4,5,6]
const square = numbers.map((num) => num**2)
console.log(square)


//----------------------------day9_level_1 9.exercise-------------------------\\
// # Use map to change to each name to uppercase in the names array

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const newArr = names.map((name1) => name1.toUpperCase())
console.log(newArr)

//----------------------------day9_level_1 10.exercise-------------------------\\
// # Use map to map the products array to its corresponding prices.

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// map metodu ile yeni bir dizi oluşturuyoruz
const productsWithPrices = products.map(function(product) {
  // her nesnenin product ve price özelliklerini birleştiriyoruz
  return product.product + ': ' + product.price;
});

// yeni diziyi yazdırıyoruz
console.log(productsWithPrices);
// ["banana: 3", "mango: 6", "potato:  ", "avocado: 8", "coffee: 10", "tea: "]


//----------------------------day9_level_1 11.exercise-------------------------\\
// # Use filter to filter out countries containing land

const countries = ['Finland','Iceland','Grönland','Turkey','Germany']
const newArr = countries.filter((new1) => new1.includes('land'))
console.log(newArr)



//----------------------------day9_level_1 12.exercise-----------------------\\
// # Use filter to filter out countries having six character.

const countries = ['Finland','Icelan','Grönland','Turkey','Germany',]
const newArr = countries.filter((new1) => new1.length ==6)
console.log(newArr)


//----------------------------day9_level_1 13.exercise-------------------------\\
// # Use filter to filter out countries containing six letters and more in the country array

const countries = ['Finland','Iceland','Grönland','Turkey','Germany']
const newArr = countries.filter((new1) => new1.length > 6)
console.log(newArr)


//----------------------------day9_level_1 14.exercise-------------------------\\
// # Use filter to filter out country start with 'E';

const countries = ['Finland','Iceland','Grönland','Turkey','Germany','England','Estonia']
const newArr =countries.filter((new1) => new1.startsWith('E'))
console.log(newArr)


//----------------------------day9_level_1 15.exercise-------------------------\\
// # Use filter to filter out only prices with values.

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
// # Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const arr = ['ali', 'veli', 'küpeli']

function getStringList(){
   let newArr= []
     arr.map(string => newArr.push(string) )
     return  console.log(newArr)
}
getStringList(arr)


//----------------------------day9_level_1 17.exercise-------------------------\\
// # Use reduce to sum all the numbers in the numbers array.

const numbers = [2,3,4,5,6]
let sum = numbers.reduce((acc,cur) => acc + cur )
console.log(sum)

//----------------------------day9_level_1 18.exercise-------------------------\\
// # Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const ulkeler = ['Estonya', 'Finlandiya', 'İsveç', 'Danimarka', 'Norveç', 'İzlanda'];

// reduce fonksiyonu ile yeni bir string oluşturuyoruz
const cumle = ulkeler.reduce(function(onceki, ulke, indeks, dizi) {
  // son elemana gelinceye kadar ülkeleri virgülle ayırıyoruz
  if (indeks < dizi.length - 1) {
    return onceki + ulke + ', ';
  } else {
    // son elemana geldiğimizde sonuna nokta ve kuzey Avrupa ülkeleridir ifadesini ekliyoruz
    return onceki + ulke + '. kuzey Avrupa ülkeleridir';
  }
}, ''); // '' başlangıç değeri

// yeni stringi yazdırıyoruz
console.log(cumle);
// Estonya, Finlandiya, İsveç, Danimarka, Norveç, İzlanda. kuzey Avrupa ülkeleridir


//----------------------------day9_level_1 19.exercise-------------------------\\
// # Explain different between some and every

var sayilar = [1, 2, 3, 4, 5];
var sonuc = sayilar.some(function(sayi) {
  return sayi > 10; // sayı 10'dan büyükse true, değilse false döndürür
});
console.log(sonuc); // false, çünkü dizideki hiçbir sayı 10'dan büyük değil

var sayilar = [1, 2, 3, 4, 5];
var sonuc = sayilar.every(function(sayi) {
  return sayi < 10; // sayı 10'dan küçükse true, değilse false döndürür
});
console.log(sonuc); // true, çünkü dizideki tüm sayılar 10'dan küçük


//----------------------------day9_level_1 20.exercise-------------------------\\
// # Use some to check if some names' length greater than seven in names array

const names = ['nevzat','atalay','gül','atalay']
const newArr = names.some((name1) => name1.length > 5)
console.log(newArr)


//----------------------------day9_level_1 21.exercise-------------------------\\
// # Use every to check if all the countries contain the word land

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newArr = countries.every((count) => count.includes('land') )
console.log(newArr)


//----------------------------day9_level_1 22.exercise-------------------------\\
// # Explain the difference between find and findIndex

Find metodu, bir dizide koşulu sağlayan ilk elemanın değerini döndürür. FindIndex metodu ise, bir dizide koşulu sağlayan ilk elemanın indeks numarasını döndürür

//----------------------------day9_level_1 23.exercise-------------------------\\
// # Use find to find the first country containing only six letters in the countries array

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newArr = countries.find((count) => count.length == 6)
console.log(newArr)

//----------------------------day9_level_1 24.exercise-------------------------\\
// # Use findIndex to find the position of the first country containing only six letters in the countries array

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newArr = countries.findIndex((count) => count.length == 6)
console.log(newArr)


//----------------------------day9_level_1 25.exercise-------------------------\\
// # Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newArr = countries.findIndex((count) => count.includes("Norway"))
console.log(newArr)


//----------------------------day9_level_1 26.exercise-------------------------\\
// # Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

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