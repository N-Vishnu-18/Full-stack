let h1=document.querySelector("#heading");
let im=document.querySelector("img")
let div=document.querySelector("div")
//ading action
let b1=document.querySelector("#action")
b1.addEventListener("click",()=>
{

//appending elemnets to div
let para=document.createElement("p")
para.textContent="paragraph"
div.appendChild(para)

//chaniging content
h1.textContent='Changing the heading'

//changing styles
h1.style.color="red"
h1.style.backgroundColor="green"

//changing image
im.src="https://img.freepik.com/free-photo/blossom-floral-bouquet-decoration-colorful-beautiful-flowers-background-garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1103.jpg?size=626&ext=jpg&ga=GA1.1.275846619.1702711467&semt=sph"
im.style.width="400px"
})

//adding more elements to div
div.innerHTML=div.innerHTML+"<h2>heading 2</h2> <p>newpara</p>"

