//app.js

const div =document.getElementById("div")
window.addEventListener("keydown", (e)=>{
const li =   document.createElement("li")
 div.innerHTML=""
  li.innerHTML= `Your pressed ${e.code}`
 div.appendChild(li)
})