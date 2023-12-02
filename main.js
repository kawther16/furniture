const menubtn = document.querySelector("#menubtn")
const navbar = document.querySelector(".navbar")
const clsbtn = document.querySelector("#clsbtn")
menubtn.addEventListener("click" , function(){
    menubtn.style.display ="none"
    navbar.style.display = "block"
    clsbtn.style.display = "block"
    
})
clsbtn.addEventListener("click", function(){
    menubtn.style.display ="block"
    navbar.style.display = "none"
    clsbtn.style.display = "none"
})