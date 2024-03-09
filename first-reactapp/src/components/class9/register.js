import React from 'react'

function register() {
  return (
    <div className="text-center">
     <h1 className="display-2 text-info bg-dark p-2 text-center">Register</h1>
     <form action="" className="w-50 mt-5  mx-auto">

      <input type="text" name="" id="" className="form-control mb-4" placeholder="username"/>
      <input type="text" name="" id="" className="form-control mb-4" placeholder="password"/>
      <input type="text" name="" id="" className="form-control mb-4" placeholder="email"/>
      <input type="text" name="" id="" className="form-control mb-4" placeholder="mobile number"/>
      
       <button type="submit" className="btn btn-success mx-auto">Register</button>
     </form>
     
    </div>
  )
}

export default register