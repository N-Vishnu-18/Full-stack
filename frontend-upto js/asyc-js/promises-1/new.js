

console.log("I made a promise to my friend to call after 5min")
let futurestatus=false;

//creating promise
let a=new Promise
((fullfilledfunction,rejectedfunction)=>{
    setTimeout(() => {
        if(futurestatus===true)
      fullfilledfunction("hello friend,how are you....")
    else  
      rejectedfunction("sorry...a bit busy....call you later")
    }, 3000);
})
// console.log(a)
//consuming promise

a
.then((mess)=>
{
    console.log("message is:",mess)
})
.catch((mess)=>
{
    console.log("message is:",mess)
});
