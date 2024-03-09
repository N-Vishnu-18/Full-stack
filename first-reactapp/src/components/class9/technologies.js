import React from 'react'
import { Link,Outlet } from 'react-router-dom'
function technologies() {
  return (
    <div>
    <ul className="nav justify-content-center mt-5">
      {/* link to home */}
      <li className="nav-item">
        <Link className="nav-link" to="nodejs">
          Nodejs
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="react">
         React
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="vue">
          VUE
        </Link>
      </li>

   </ul>
   <Outlet/>
    </div>
  )
}

export default technologies