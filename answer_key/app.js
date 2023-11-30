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
// Estonya, Fin