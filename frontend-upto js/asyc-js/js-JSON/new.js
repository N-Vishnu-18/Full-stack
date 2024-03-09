let jsobj={
    a:10,
    b:20
}
console.log(jsobj);

//js to JSON
let Json=JSON.stringify(jsobj);

console.log(Json);

//JSON to js

let jsondata = '{"a":20,"b":100}';
let jsobject = JSON.parse(jsondata);

console.log(jsondata);