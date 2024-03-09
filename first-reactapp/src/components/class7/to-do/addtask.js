import React from 'react'
import {useForm} from'react-hook-form';
function Addtask(props) {
    let{register,handleSubmit}=useForm()

    function handleFormSubmit(taskobj){
        props.setTasks([...props.tasks,taskobj])
        
    }
  return (
    <div>
        <p className="lead fs-2 text-center">addtask</p>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
         <input type="text" {...register('newtask')} className="form-control mb-4" placeholder='enter task'/>
         <button className='btn btn-info d-block text-white mx-auto' type='submit'>Addtask</button>
        </form>
    </div>
  )
}

export default Addtask;