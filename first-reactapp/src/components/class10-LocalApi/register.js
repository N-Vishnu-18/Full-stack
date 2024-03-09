import React from 'react';
import {useForm} from 'react-hook-form'
import {useNavigate,NavLink} from 'react-router-dom'
import {hashSync} from 'bcryptjs'
function Register() {

  let navigate=useNavigate();
  let{register,handleSubmit,formState:{errors}}=useForm()

  function onRegisterFormSubmit(newUser)
  {   //hash the password 
      //replace the  password with hashed password

      let hashedpassword=hashSync(newUser.password,5)
      newUser.password=hashedpassword
    // make http post request
    fetch('http://localhost:4000/users',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(newUser)
      })
      .then(res=>{
        if(res.status===201)
        {
          //navigate to login
          navigate('/login')

        }
      })
      .catch(err=>console.log("error in registeration"))

  }
  return (
    <div className="text-white">
     <h1 className="display-3 text-white bg-dark text-center p-2">SignUp</h1>
     <form action="" className="w-50 mt-5  mx-auto" onSubmit={handleSubmit(onRegisterFormSubmit)}>
     <label htmlFor="username" className="form-label  ">Username</label>  
      <input type="text"  id="username" className="form-control mb-4" placeholder="username" {...register("username",{required:true,minLength:4})}/>

         {errors.username?.type==='required'&&<p className='text-danger'>Username is required</p>}
         {errors.username?.type==='minLength'&&<p className='text-danger'>minLength should be 4</p>}


     <label htmlFor="password" className="form-label">Password</label>
      <input type="text"  id="password" className="form-control mb-4" placeholder="password" {...register("password",{required:true,minLength:4,maxLength:8})}/>
     
      {errors.password?.type==='required'&&<p className='text-danger'>Password is required</p>}
      {errors.password?.type==='minLength'&&<p className='text-danger'>minLength should be 4</p>}
      {errors.password?.type==='maxLength'&&<p className='text-danger'>maxLength should be 8</p>}


     <label htmlFor="email" className="form-label">Email</label>
      <input type="text"  id="email" className="form-control mb-4" placeholder="email"{...register("email",{required:true})}/>

      {errors.email?.type==='required'&&<p className='text-danger'>Email is required</p>}


      
       <button type="submit" className="btn btn-success mx-auto ">Register</button>
     </form>
     <p className="lead text-center text-white p-4 ">Already a User?
     <NavLink to="/login">login</NavLink>
     </p>
    </div>
  )
}

export default Register