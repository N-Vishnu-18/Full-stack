import React from 'react'
import {useLocation} from 'react-router-dom'
function Userdashboard() {
  let {state}=useLocation()

  return (
    <div className="mx-5">
      <p className="lead fs-3 text-end text-info">welcome <span className="text-white fs-1">{state.username}</span>  </p>
      <p className="lead  text-end text-white">{state.email}</p>
      <h3 className="text-center text-white p-4">User data is transferred while Navigating</h3>
    </div>
  )
}

export default Userdashboard