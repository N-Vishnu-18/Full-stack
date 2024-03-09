let in1=document.querySelector("#username")
let btn=document.querySelector(".inbtn")

btn.addEventListener("click",()=>
{
    let username=in1.value;
    let h1=document.createElement("h1")
    h1.textContent=username
     document.body.appendChild(h1)
})