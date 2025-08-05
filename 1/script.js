const switchBtn=document.querySelector(".toggle-switch")
const body=document.querySelector("body")
switchBtn.addEventListener("click",()=>{
    body.classList.toggle("dark")    
})