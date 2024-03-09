import React,{useContext} from 'react'
import C from './c'
import { CounterContext } from '../counterContext'

function B() {
    let[counter]=useContext(CounterContext)
  return (
    <div className='bg-danger mx-5 p-5'>Component b
    <p className="lead fs-1">counter:{counter}</p>
        <C/>
    </div>
  )
}

export default B