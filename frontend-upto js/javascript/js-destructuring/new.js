//packing
let a=[1,2,3];


//unpacking
console.log("unpacking using index:");
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

//unpacking using array
let [x,,z]=a;
console.log("unpacking using array:");
console.log(x,z);


let obj={
    p:10,
    q:20
}

let{p,q}=obj;
console.log("the names should be the same as obj members");

console.log(p,q);
