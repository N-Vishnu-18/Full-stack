let ar=[1,2,"vishnu",34.34];
console.log(typeof(ar));
console.log(ar[5]);
console.log(ar.length);
let a=[10,20,30,40]
console.log(a);
a.unshift(5);
console.log(a);
a.push(50,60);
console.log(a);
a.splice(3,0,25);
console.log("splice:",a);
let b=a.shift();
console.log(a);
console.log(b);
b=a.pop();
console.log(a);
console.log(b);
b=a.splice(2,1);
console.log(a);
console.log(b);
let obj={
    id:"22071A0596",
    name:"vishnu",
    age:20
}
console.log(obj);