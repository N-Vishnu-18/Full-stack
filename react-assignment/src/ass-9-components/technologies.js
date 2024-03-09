import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import './technologies.css'
function technologies() {
  return (
    <div>
      <h1 className="display-3 text-white bg-dark text-center p-2" >Technologies</h1>
    <ul className="nav justify-content-center mt-5">
      {/* link to home */}
      <li className="nav-item">
        <Link className="tech nav-link text-white"style={{backgroundColor:"gray",borderRadius:"4px",margin:"2px"}} to="angular">
          Angular
        </Link>
      </li>

      <li className="nav-item">
        <Link className="tech nav-link text-white" style={{backgroundColor:"gray",borderRadius:"4px",margin:"2px"}} to="react">
         ReactJs
        </Link>
      </li>

      <li className="nav-item">
        <Link className="tech nav-link text-white" style={{backgroundColor:"gray",borderRadius:"4px",margin:"2px"}}to="vue">
          VUE
        </Link>
      </li>

   </ul>
   <Outlet/>
    </div>
  )
}

export default technologies