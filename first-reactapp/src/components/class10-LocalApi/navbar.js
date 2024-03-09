import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
function navbar() {
  return (
    <div style={{color:"white",backgroundColor:"#212529"}}>
    <ul className="nav justify-content-end " style={{marginRight:"20px"}}>
      {/* link to home */}
      <li className="nav-item ">
        <NavLink className="nav-link "to="">
          Home
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link " to="register">
          SignUp
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link " to="login">
          SignIn
        </NavLink>
      </li>
   </ul>
    </div>
  )
}

export default navbar