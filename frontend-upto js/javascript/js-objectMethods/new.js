let student=
{
    rno:54,
    name:"vishnu",
    age:20,
}
//keys
console.log(Object.keys(student));
//values
console.log(Object.values(student));
//freeze
student.city="hyderabad";
console.log(student);
console.log(Object.freeze(student));
student.state="telangana";
console.log("adding state after freezing",student);
//assign 
let ob1={
    a:10,
}
console.log(ob1);

let ob2={
    b:20,
}
console.log(ob2);
let newobj=Object.assign({},ob1,ob2);
console.log(newobj);
