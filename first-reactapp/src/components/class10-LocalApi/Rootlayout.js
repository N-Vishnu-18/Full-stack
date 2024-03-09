import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
function Rootlayout() {
  return (
    <div>
      <Navbar/>
      {/* place holder component */}
      
      <div style={{height:"82.5vh"}}>
      <Outlet/>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Rootlayout