import React, { useState}from 'react';
import { useForm } from 'react-hook-form';
import { CounterContext } from './counterContext';

function AddUser() {
    let { register, handleSubmit,formState:{errors} } = useForm();

    let [errorMessage, setErrorMessage] = useState('');

    let [users,setUsers]=useContext(CounterContext)
    
    function handleFormSubmit(userObj) {
        // Check if the username already exists
        const isDuplicate = users.some(user => user.username === userObj.username);
        if (isDuplicate) {
            // Set the error message state
            setErrorMessage('Duplicate username');
            return;
        }
        // Clear the error message if there was one previously
        setErrorMessage('');
        setUsers([...users, userObj]);
    }

    return (
        <div>
            <p className="lead fs-2 text-center text-white">Add User</p>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <input type="text" {...register('username',{required:true})} className="form-control mb-4" placeholder='Enter username' />
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                 {errors.username?.type==='required'&&<p className='text-danger'>Username is required</p>}
                <input type="text" {...register('email',{required:true})} className="form-control mb-4" placeholder='Enter email' />
                {errors.email?.type==='required'&&<p className='text-danger'>email is required</p>}
                <button className='btn btn-info d-block text-white mx-auto' type='submit'>Add User</button>

            </form>
        </div>
    );
}

export default AddUser;
