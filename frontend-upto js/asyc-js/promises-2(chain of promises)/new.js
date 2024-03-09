let state=true;

let prm=new Promise((fulfil,rejec)=>
{
    if(state===true)
       fulfil(1);
    else 
       rejec("error")
})

prm.then(mess=>mess+1)//returns another promise
.then(mess=>mess+2)
.then(mess=>
console.log("the message is ",mess)
    )
.catch(err=>console.log("the message is ",mess)   )