const animation = document.getElementById("footer")

const words = ["HTML", "CSS", "JavaScript", "React"];
let i = 0; // bu değişkeni genel olarak tanımlamak gerekiyor

function typeWord() {
    if (i < words.length) {
        let currentWord = words[i];
        animation.innerHTML ="The tecnologies I teach  " + `<span>${currentWord}</span>`
        setTimeout(typeWord, 2000)
        i++
    } else {
        i = 0;
        typeWord();
    }
}

typeWord();