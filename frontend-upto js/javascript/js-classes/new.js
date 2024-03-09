class Person{
    constructor(name)
    {
        this.name=name;
    }
    getName()
    {
        return this.name;
    }
}
let p=new Person("Vishnu");
console.log(p);

class Student extends Person{
    constructor(name,course)
    {
       super(name);
       this.course=course;
    }
    
}

class Emp extends Person{
    constructor(name,sal)
    {
       super(name);
       this.sal=sal;
    }
    
}
let std=new Student("ravi","btech");
let emp1=new Emp("kishore",125000);
console.log(std);
console.log(emp1);