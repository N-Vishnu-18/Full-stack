let a=10;//global scope


function getSum(b)//function scope
{   console.log("b=",b)
     let sum=a+b;
     console.log("sum=",sum)
    
     if(sum>0)
     {
        let x=123;
        console.log("x=",x)
          return "+VE "
          

     }
     else
     {
        return "-VE"
     }
     
}
getSum(100)
console.log("a=",a)


console.log("x=",x)
var x=20;

// console.log("y=",y)
// let y=20;

//anonymous function 
let f=function ()
{
    return "hello"
}
console.log("f=",f())

let sum=(a,b)=>a+b;
console.log(sum(5,8));