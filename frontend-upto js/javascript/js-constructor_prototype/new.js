function Person(name)
{
    this.name=name;
}
function Student(name,course)
{
    Person.call(this,name);
    this.course=course;
}
function Emp(name,sal)
{
    Person.call(this,name);
    this.sal=sal;
}
Emp.prototype=Object.create(Person.prototype);
Student.prototype=Object.create(Person.prototype);

let std=new Student("ravi","btech");
let emp1=new Emp("kishore",125000);
console.log(std);
console.log(emp1);

