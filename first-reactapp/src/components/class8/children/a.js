import React,{useContext} from 'react'
import B from './b'
import { CounterContext } from '../counterContext'
function A() {
    let[counter]=useContext(CounterContext)
  return (
    <div className="bg-success mx-5 p-5">Component a
     <p className="lead fs-1">counter:{counter}</p>
        <B/>
    </div>
    
  )
}

export default A;