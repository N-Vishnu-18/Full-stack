function test()
{
    console.log("test called");

}
console.log(typeof(test));
test.x=100;
console.dir(test);
let obj={
    a:10,
    b:10
}
obj.c=10;
console.log(obj);

let hello=function(){
    return "hello";
}
console.log(hello());


function new1(a)
{
    console.log("value of a:",a);
    return a();
}
console.log(new1(function(){
    return 100;
}))
//or
//console.log(new1(()=>{
//  return 100;
//}))

function new2()
{
    return function(){
        return 200;
    }
}

let result=new2();
console.log(result());