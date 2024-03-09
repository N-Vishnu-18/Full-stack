import React from 'react'
import {useForm} from 'react-hook-form'
import {NavLink,useNavigate} from 'react-router-dom'
import {compareSync} from 'bcryptjs'
function Login() {
  let{register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate()
  function onLoginFormSubmit(userCred)
  {

      fetch(`http://localhost:4000/users?email=${userCred.email}`,
        { method: "GET" }
      ).then(res => res.json())
       .then((userobjArray) =>{
        console.log(userobjArray)
        if(userobjArray.length===0)
        {       
             alert("invalid Email ")
        }
        else
        {
         let result= compareSync(userCred.password,userobjArray[0].password)
         if(result)
         {
           navigate(`/dashboard/${userCred.email}`,{state:userobjArray[0]})
         }
         else
         {
          alert("Incorrect Password")

         }
        }
       });
    

  }
  return (
    <div className="text-white">
    <h1 className="display-3 text-white bg-dark text-center p-2">SignIn</h1>
    <form action="" className="w-50 mt-5 mx-auto" onSubmit={handleSubmit(onLoginFormSubmit)}>
         

    <label htmlFor="email" className="form-label">Email</label>
      <input type="text"  id="email" className="form-control mb-4" placeholder="email"{...register("email",{required:true})}/>

      {errors.email?.type==='required'&&<p className='text-danger'>Email is required</p>}

      <label htmlFor="password" className="form-label">Password</label>
      <input type="text"  id="password" className="form-control mb-4" placeholder="password" {...register("password",{required:true,minLength:4,maxLength:8})}/>
     
      {errors.password?.type==='required'&&<p className='text-danger'>Password is required</p>}
      {errors.password?.type==='minLength'&&<p className='text-danger'>minLength should be 4</p>}
      {errors.password?.type==='maxLength'&&<p className='text-danger'>maxLength should be 8</p>}

 

     
      <button type="submit" className="btn btn-primary mx-auto">Login</button>
    </form>
    <p className="lead text-center text-white p-4">New User?
     <NavLink to="/register">Register</NavLink>
     </p>
   </div>
  )
}

export default Login