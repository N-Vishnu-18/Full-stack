let emps = [
    { emp: 1, name: "ravi", age: 19, city: "hyderabad" },
    { emp: 2, name: "john", age: 25, city: "new york" },

];

let tbody = document.querySelector("tbody")
let butt=document.querySelector("button")
let tab=document.querySelector("table")


for (let empobj of emps) {
    tbody.innerHTML = tbody.innerHTML + `<tr><td>${empobj.emp}</td> <td>${empobj.name}</td><td>${empobj.age}</td><td>${empobj.city}</td></tr>`;
}
butt.addEventListener("click",()=>
{   if(tab.hidden){
     tab.hidden=false;
     butt.textContent="hide table"}
    else{
     tab.hidden=true;
     butt.textContent="show table"}

})