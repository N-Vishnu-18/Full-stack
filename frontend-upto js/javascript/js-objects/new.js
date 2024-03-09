let obj={
    id:"22071A0596",
    name:"vishnu",
    age:19,
    address:{
        city:"hyderabad",
        pincode:"500060"
    },
    techskills:["c","c++","java"],
    getdata:function(){
            return "hello";
    }
}
// console.log(obj);
// console.log(obj.age);
// console.log(obj["id"]);
// //for in loop
// for(let x in obj){
// console.log(x);
// console.log(obj[x]);
// }

//    console.log(obj.address.city);
//    console.log(obj.techskills.length);
//    console.log(obj.getdata());

let emp={
    empId:1,
    name:"vishnu",
    skills:["reactjs","nodejs","aws"],
    basic:2000,
    getsalary:function()
    {
        let hra=0.15*this.basic;
        let da=0.10*this.basic;
        let sal=this.basic+hra+da;
        return sal;

    }
}
console.log(emp.getsalary());
