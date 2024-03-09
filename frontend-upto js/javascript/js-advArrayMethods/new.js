let a=[10,20,9,-34,67,400,12,-87]
    
//filter
//get elements >40
        // let result=[];
        // for(let i=0;i<a.length;i++)
        // {
        //     if(a[i]>40)
        //     result.push(a[i]);
        // }
        // console.log(result)

        // let r=a.filter(function(n){
        //    return n>40
        // })
        // console.log(r)
let r=a.filter((n)=>n>40)
 console.log(r);

 //map
 //modifying elements 
 let modify=a.map((n)=>n+20)
 console.log(modify)


 //for each loop
a.forEach((n,i)=>console.log("value of index",i,"is",n))

//find method
//search for element
let srch1=a.find((n)=>n==50);
console.log("search result is",srch1)
let srch2=a.find((n)=>n==400);
console.log("search result is",srch2)

//find index
let srch3=a.findIndex((n)=>n==50);
console.log("50 is at",srch3)
let srch4=a.findIndex((n)=>n==400);
console.log("400 is at",srch4)

//reduce method
//sum of array
let sum=a.reduce((acc,ele)=>acc+ele);
console.log("sum is",sum);
//smallest number
let small=a.reduce((acc,ele)=>acc>ele?ele:acc);
console.log("smallest ele is:",small);
