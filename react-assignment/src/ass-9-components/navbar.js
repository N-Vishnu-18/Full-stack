import React from 'react'
import { Link } from 'react-router-dom'
function navbar() {
  return (
    <div style={{color:"white",backgroundColor:"#212529"}}>
    <ul className="nav justify-content-end " style={{marginRight:"20px"}}>
      {/* link to home */}
      <li className="nav-item ">
        <Link className="nav-link text-white" to="">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white" to="register">
          SignUp
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white" to="login">
          SignIn
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white" to="technologies">
          Technologies
        </Link>
      </li>
   </ul>
    </div>
  )
}

export default navbar