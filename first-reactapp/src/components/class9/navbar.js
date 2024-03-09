import React from 'react'
import { Link } from 'react-router-dom'
function navbar() {
  return (
    <div>
    <ul className="nav justify-content-end">
      {/* link to home */}
      <li className="nav-item">
        <Link className="nav-link" to="">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="register">
          Register
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="login">
          Login
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="technologies">
          Technologies
        </Link>
      </li>
   </ul>
    </div>
  )
}

export default navbar