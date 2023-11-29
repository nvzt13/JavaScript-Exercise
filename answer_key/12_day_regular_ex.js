//----------------------------day12_level_1 1.exercise-------------------------\\
// # Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

let text ="He earns 4000 euro from salary per month, 10000 euro  annual bonus, 5500 euro online courses per month."
let pattern = /\d+/g
let numbers = text.match(pattern)
numbers = numbers.map(Number)
let montlySalary = numbers[0]
let bonus = numbers[1]
let montCourses = numbers[2]
console.log(`Annual income is ${(montlySalary*12) + (bonus) + (montCourses *12)}`)


//----------------------------day12_level_1 2.exercise-------------------------\\
// # The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.



//----------------------------day12_level_1 3.exercise-------------------------\\
// # The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

// Bir dizenin geçerli bir JavaScript değişkeni olup olmadığını kontrol eden bir fonksiyon
function isValidVariableName(str) {
    // Birinci karakterin harf, alt çizgi veya dolar işareti olup olmadığını kontrol eden bir kalıp
    var firstCharPattern = /^[a-zA-Z_$]/;
    // Diğer karakterlerin harf, rakam, alt çizgi veya dolar işareti olup olmadığını kontrol eden bir kalıp
    var otherCharPattern = /^[a-zA-Z0-9_$]*$/;
    // Dizenin rezerve edilmiş bir kelime olup olmadığını kontrol eden bir dizi
    var reservedWords = ["var", "let", "const", "function", "if", "else"];
    // Dizenin boş olmadığını, birinci karakterin kalıpla eşleştiğini, diğer karakterlerin kalıpla eşleştiğini ve rezerve edilmiş kelimeler arasında olmadığını kontrol eder
    return str && firstCharPattern.test(str) && otherCharPattern.test(str) && !reservedWords.includes(str);
  }
console.log(isValidVariableName('21dzfgdf'))



//___________________________starting_exercise_level_2_______________________\\

//----------------------------day12_level_2 1.exercise-------------------------\\
// # Write a function called tenMostFrequentWords which get the ten most frequent word from a string?


// Paragrafınızdaki en sık kullanılan 10 kelimeyi döndüren bir fonksiyon

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(paragraph) {
    // Paragrafı kelimelere ayırırken noktalama işaretlerini ve büyük harfleri yok sayar
    var words = paragraph.toLowerCase().replace(/[.,]/g, '').split(/\s/);
    // Her kelimenin frekansını tutan bir nesne oluşturur
    var freqMap = {};
    words.forEach(function(word) {
      // Kelime nesnede yoksa 0, varsa mevcut değerine 1 ekler
      freqMap[word] = (freqMap[word] || 0) + 1;
    });
    // Nesneyi bir diziye dönüştürür ve frekansa göre azalan şekilde sıralar
    var sorted = Object.entries(freqMap).sort(function(a, b) {
      return b[1] - a[1];
    });
    // Sadece ilk 10 elemanı alır ve kelimeleri bir dizi olarak döndürür
    return sorted.slice(0, 10).map(function(pair) {
      return pair[0];
    });
  }
console.log( tenMostFrequentWords(paragraph))

//___________________________starting_exercise_level_3_______________________\\

//----------------------------day12_level_3 1.exercise-------------------------\\
// # Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
