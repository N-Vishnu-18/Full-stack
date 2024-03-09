import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {increementCounter} from '../slices/counterSlice'
import {userPromise}from '../slices/userSlice'
function Sample1() {
  let {counter}=useSelector(state=>state.counter)
  let {users}=useSelector(state=>state.users)

  let dispatch=useDispatch()
  
  function changeCounter(){
    let actionobj=increementCounter()

    //dispatch actionobj to store
    dispatch(actionobj)


  }

  function getUsers()
  {
    let actionobj=userPromise()
    dispatch(actionobj)
    }
  
  return (
    <div className="text-Center " >
      <h1 className="text-center ">{counter}</h1>
      <button className="btn btn-success d-block m-5 mx-auto"  onClick={changeCounter}>Increement</button>
      <button className="btn btn-dark d-block m-5 mx-auto"  onClick={getUsers}>
        getusers
      </button>
      {
      users.map(userobj=><p className="lead" key={userobj.id}>{userobj.username}</p>)

      }

      
    <ul className="nav justify-content-center  bg-secondary p-3"  >

      <li className="nav-item ">
        <NavLink className="nav-link text-white"to="test-1">
          Test-1
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link text-white" to="test-2">
          Test-2
        </NavLink>
      </li>

   </ul>
   <Outlet/>
    </div>
  )
}

export default Sample1