import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {decreementCounter, changeCounterbyValue} from '../slices/counterSlice'



function Sample2() {
  let {counter}=useSelector(state=>state.counter)
  let dispatch=useDispatch()

  function changeCounter(){
    let actionobj=decreementCounter()

    //dispatch actionobj to store
    dispatch(actionobj)


  }

  function changeCounter2()
  {
    let actionobj=changeCounterbyValue(20)
    dispatch(actionobj)
  }
  

  return (
    <div className="text-Center " >

      <h1 className="text-center">{counter}</h1>
      <button className="btn btn-success d-block m-5 mx-auto"  onClick={changeCounter}>decreement</button>
      <button className="btn btn-success d-block m-5 mx-auto"  onClick={changeCounter2}>changeByValue</button>

      
    <ul className="nav justify-content-center  bg-secondary p-3" >

      <li className="nav-item ">
        <NavLink className="nav-link text-white"to="test-3">
          Test-3
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link text-white " to="test-4">
          Test-4
        </NavLink>
      </li>

   </ul>
   <Outlet/>
    </div>
  )
}

export default Sample2