function Emp(rno,age,name,skills)
{
    this.rno=rno;
    this.age=age;
    this.name=name;
    this.skills=skills;
}
let emp1=new Emp(100,21,"banu",["c","c++"]);
console.log(emp1);
emp1.sal=25000;
console.log(emp1);
delete emp1.age;
console.log(emp1);
