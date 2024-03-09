import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'

function Rootlayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Rootlayout