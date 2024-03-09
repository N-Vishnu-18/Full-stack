let x=10;
let y;
console.log(x);
y=x+23;
console.log(y);
let obj={
    a:1,
    b:2
}
let c=obj;
obj.c=12;
console.log("non primitives dont get copied but there reference is copied:");
console.log("obj:",obj);
console.log("copy",c);
console.log("\n");
//copying a object

let ob2={
    h:"hello",
    i:"hi"
}
console.log("copying an object");
console.log("obj:",ob2);
let copy={...ob2}
//or
// let copy=Object.assign({},ob2);
console.log("\n");

console.log("copy after adding new member:");
copy.k="hola";
console.log("copy",copy);
console.log("\n");