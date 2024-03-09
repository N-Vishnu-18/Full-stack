import React from 'react'

function login() {
  return (
    <div className="text-center">
    <h1 className="display-3 text-white bg-dark text-center p-2">SignIn</h1>
    <form action="" className="w-50 mt-5 mx-auto">

     <input type="text" name="" id="" className="form-control mb-4" placeholder="email"/>
     <input type="text" name="" id="" className="form-control mb-4" placeholder="password"/>

     
      <button type="submit" className="btn btn-primary mx-auto">Login</button>
    </form>
    
   </div>
  )
}

export default login