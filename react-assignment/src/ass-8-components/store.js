import React,{useState}from 'react'
import { CounterContext } from './counterContext'
function Store({children}) {
    let[users,setUsers]=useState([])
  return (
    <div>
        <CounterContext.Provider value={[users,setUsers]}> 
             {children}
        </CounterContext.Provider>
    </div>
  )
}

export default Store