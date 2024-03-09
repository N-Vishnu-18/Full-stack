let emp=[
    {
        eno:100,
        name: 'Ravi',
        age:20, 
        basic:10000,
        skills: ['js', 'nodejs'],
        address: {
        city: 'hyderabad',
        pincode:555555
     }
    },
    {
        eno: 101,
        name: "Sara",
        age: 25,
        basic: 12000,
        skills: ["python", "django"],
        address: {
            city: "Bangalore",
            pincode: 666666
        }
    },
    {
        eno: 102,
        name: "Alex",
        age: 22,
        basic: 15000,
        skills: ["java", "spring"],
        address: {
            city: "chennai",
            pincode: 777777
        }
    }    
    
]

let empage20=emp.filter(ele =>ele.age>=20)
console.log(empage20);


//hiking hyderabad salary
let newempdata=emp.map((ele)=>
{
    if(ele.address.city==="hyderabad")
       return  ele.basic+=3000;
    else if(ele.address.city==="chennai")
        return  ele.basic+=5000;
    else
        return ele.basic;

})
console.log(newempdata)

//sum of basics
let sumbasic=emp.reduce((acc,ele)=>
{
    acc.basic=acc.basic+ele.basic;
    return acc;
})
console.log(sumbasic.basic);

//youngest employee
let youngest=emp.reduce((acc,ele)=>acc.age<ele.age?acc:ele
)
console.log(youngest.name);