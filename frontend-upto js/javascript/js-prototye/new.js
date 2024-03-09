function Emp(rno,age,name,skills)
{
    this.rno=rno;
    this.age=age;
    this.name=name;
    this.skills=skills;
   
}
Emp.prototype.getdata=function()
{
    return "hello";
}
let emp1=new Emp(100,21,"banu",["c","c++"]);
let emp2=new Emp(101,19,"harsha",["c","c++","React js"]);

console.log(emp1.getdata());
console.log(emp2);


let car={
    wheels:4,
    color:"white",
    seatingCapacity:4,
    getStatus:function()
    {
        return "excellent";
    }
}

let mgHec={
    color:"black",
    seatingCapacity:5,

}

let kia={
    getStatus:function()
    {
        return "good";
    }
}

Object.setPrototypeOf(mgHec,car);
Object.setPrototypeOf(kia,car);

console.log(mgHec.getStatus());