import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div style={{color:"white",backgroundColor:"#212529"}}>
    <ul className="nav justify-content-end  " style={{marginRight:"20px"}}>

      <li className="nav-item ">
        <NavLink className="nav-link text-white"to="sample-1">
          Sample-1
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link text-white" to="sample-2">
          Sample-2
        </NavLink>
      </li>

   </ul>
    </div>
  )
}

export default Header