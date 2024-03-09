import React,{useContext} from 'react'
import { CounterContext } from '../counterContext'


function D() {
    let[counter]=useContext(CounterContext)
  return (
    <div className="bg-success mx-5 mt-5 p-5">Component d
    <p className="lead fs-1">counter:{counter}</p>
    </div>
  )
}

export default D