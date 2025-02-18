let myParagraph = document.querySelector("p")
let color = document.getElementById("color")
let fontSize = document.getElementById("number")
let fontFamily = document.getElementById("select")
// event listener for the color field
color.addEventListener("input" , event => {
    myParagraph.style.color= color.value
})
// event listener for the font size
fontSize.addEventListener("input" , event => {
    myParagraph.style.fontSize= `${fontSize.value}px`
})
// event listener for the font family
fontFamily.addEventListener("input" , event => {
    myParagraph.style.fontFamily= fontFamily.value
})