const header=document.querySelector("header")

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>80)
})

let menu=document.querySelector("#menu")
let navList=document.querySelector(".navlist")

menu.onclick=()=>{
    menu.classList.toggle('bx-x')
    menu.classList.toggle("open")
}