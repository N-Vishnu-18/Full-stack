import React,{useContext} from 'react'
import { CounterContext } from '../counterContext'


function C() {
    let[counter,setCounter]=useContext(CounterContext)
    function updateCounter()
    {
        setCounter(counter+1)
    }
  return (
    <div className="bg-secondary mx-5 p-5">
        Component c
        <p className="lead fs-1">counter:{counter}</p>
        <button className="btn btn-light" onClick={updateCounter}>+1</button>
        </div>
  )
}

export default C