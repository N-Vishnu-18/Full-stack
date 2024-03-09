const exp=require('express')
const app=exp();

//extract body of request
app.use(exp.json())

let userslist=[
    {
        id:1,
        name:'vishnu'
    },
    {
        id:2,
        name:'harsha'
    }
]
//user API

//operations are:-

//create user
app.post('/new-user',(req,res)=>{
    //get new user from req object
    let newUser=req.body

    //add user to the userlist
    userslist.push(newUser)

    //send response
    res.send({message:"new user created"})


})

//get all users
app.get('/users',(req,res)=>{
     //console.log(res.body)
     res.send({users:userslist})
})

// get user by id(id is url parameter)
app.get('/users/:id', (req, res) => {
   //get url parameter
   const id=Number(req.params.id)  //return parameter i.e ID

   let user=userslist.find(userobj=>userobj.id===id)
   if(user===undefined)
     res.send({message:'no user found'})
   else
     res.send({payload:user})
    
});

// update user by id
app.put('/user/:id',(req,res)=>{
    //get modified user
    let modifiedUser=req.body
    //get index of user obj
    let index=userslist.find(userobj=>userobj.id===modifiedUser.id)
    if(index===-1)
      res.send({message:"user not found"})
    else{
      userslist.splice(index,1,modifiedUser)
      res.send({message:"user modified"})
    }
})

// delete user by id
app.delete('/user/:id',(req,res)=>{

    let id=Number(req.params.id);

    let index=userslist.find(userobj=>userobj.id===id)

    if(index===-1)
      res.send({message:"user not found"})
    else{
        userslist.splice(index,1)
        res.send({message:"user deleted"})
    }
})

app.listen(4000,()=>console.log('APP is running on port 4000'))

