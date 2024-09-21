// const title = document.getElementById("firsttitle")
// title.style.color= "red"


const title = document.getElementById("title")
const button =document.querySelector("button")

button.addEventListener("click", ()=>{
    title.classList.toggle("title")
})

