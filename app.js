const header = document.getElementById("header")

let sentences="30 DAYS OF JAVASCRİPT CHALLENGE 2023 NEVZAT ATALAY"

function randomColor() {
    let hexa = "#"
    let letters = "0123456789ABCDEF"

    for(let i=0; i<6; i++){
       let randomNumber = Math.floor(Math.random() * letters.length)
       hexa += letters[randomNumber]
   }
   return hexa
}

let container = document.getElementById("container")
container.style.setProperty("background-color", randomColor())


displayLetter()

function displayLetter(){
    // Her harfi tek tek yakalama ve boşlukları de at
    let newSentences=""
        for (let i = 0; i < sentences.length; i++) {
            newSentences +=  `<span style="color:${randomColor()}">${sentences[i]}</span>`
        }
        return newSentences
}
header.innerHTML=displayLetter()