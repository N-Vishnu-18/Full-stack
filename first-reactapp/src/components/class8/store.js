import React,{useState}from 'react'
import { CounterContext } from './counterContext'
function Store({children}) {
    let[counter,setCounter]=useState(10);
  return (
    <div>
        <CounterContext.Provider value={[counter,setCounter]}> 
             {children}
        </CounterContext.Provider>
    </div>
  )
}

export default Store