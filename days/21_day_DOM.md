
// <p class="paragraph" id="first-paragraph">first</p>
// <p class="paragraph" id="second-paragraph">second</p>
// <p class="paragraph" id="third-paragraph">third</p>
// <p class="paragraph"></p>

//todo exercise 1

const firstParagraph = document.querySelector('p')
console.log(firstParagraph)

//todo exercise 2

let firstParagraph = document.querySelector('#first-paragraph')
let secondParagraph = document.querySelector('#second-paragraph')
let thirdParagraph = document.querySelector('#third-paragraph') 
console.log(firstParagraph,secondParagraph,thirdParagraph)

//todo exercise 3

const allParagraph = document.querySelectorAll('p')
console.log(allParagraph)

//todo exercise 4

const allParagraph = document.querySelectorAll('p')
for(let i=0; i<allParagraph.length; i++){
    console.log(allParagraph[i])
}

//todo exercise 5

const paragraf = document.querySelectorAll('p')
paragraf[3].textContent = 'four paragraf'

//todo exercise 6

const paragraph =document.querySelectorAll('p')

paragraph[0].className= 'parag_one'
paragraph[0].id= 'id_one'

paragraph[1].setAttribute('class','paragraph_two')
paragraph[1].setAttribute('id','id_two')

paragraph[2].classList='paragraph_thre'
paragraph[2].id='id_thre'

paragraph[3].setAttribute('class','paragraph_four')
paragraph[3].setAttribute('id','id_four')


console.log(paragraph)


//? exercise 1

const paragraf =document.querySelectorAll('p')

paragraf[0].style.background='blue'
paragraf[1].style.fontSize='50px'
paragraf[2].style.border='1px solid red'
paragraf[3].style.color='yellow'

//? exercise 2

const paragraf =document.querySelectorAll('p')

 
paragraf.forEach((paragraf,i) => {
    
    if(i % 2 ===0){
        paragraf.style.backgroundColor='green'
    }
    else(paragraf.style.backgroundColor='red')
})

//? exercise 3

const paragraf =document.querySelectorAll('p')

for(const par of paragraf){
    par.className='class'
    par.id='id'
    par.textContent='This is a paragraph '
}

//! exercise 1