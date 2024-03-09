import {useState} from 'react';
import {useForm} from'react-hook-form';
function Formdemo()

{   let[users,setUsers]=useState([])
    let{register,handleSubmit,formState:{errors}}=useForm()
    function handleFormSubmit(userobj)
    {
         setUsers([...users,userobj])
    }
    
    function deleteUser(index)
    {
         let copyUsers=[...users]
         copyUsers.splice(index,1)
         setUsers(copyUsers)
    }
     return(
        <div className="row justify-content-center" >
            <div className="col-sm-4 bg-info m-5 p-4" >
                <h1 className="text-center">Form Demo</h1>
                <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="mb-3" style={{maxWidth:"400px",margin:"auto"}}>
                        <label htmlFor="username" className="form-label">Username</label>

                        <input type="text"  
                        id='username' 
                        className="form-control" 
                        placeholder="username " 
                        {...register('username',{required:true,minLength:4})}/>
                    </div>
                    {errors.username?.type==='required'&&<p className='text-danger'>Username is required</p>}
                    {errors.username?.type==='minLength'&&<p className='text-danger'>minLength should be 4</p>}

                    <div className="mb-3" style={{maxWidth:"400px",margin:"auto"}}>
                        <label htmlFor="email" className="form-label">Email</label>

                        <input type="email"  
                        id='email' 
                        className="form-control" 
                        placeholder="email" 
                        {...register('email',{required:true})}/>

                    </div>
                    {errors.email?.type==='required'&&<p className='text-danger'>Email is required</p>}

                    <div className='mb-3'style={{maxWidth:"400px",margin:"auto"}}>
                    <select id="" className="form-select" {...register('state',{required:true})} defaultValue="">
                    <option value=""  disabled  >--state--</option>
                    <option value="telangana">Telangana</option>
                    <option value="andhra pradesh">Andhra pradesh</option>
                    <option value="tamil nadu">Tamil nadu</option>
                    </select>
                    {errors.state?.type==='required'&&<p className='text-danger'>State is required</p>}
                    </div >
                    <button className="btn-btnsucess" type="submit">login</button>
                </form>
            </div>

            {/* table-of-users */}

            <div className="col-sm-6   p-4" >
                <h1 className="text-center">User Table</h1>
                <table className="table text-center table-primary">
                    <thead>
                        <tr>
                        <th>username</th>
                        <th>email</th>
                        <th>state</th>
                        <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                    {
                        users.map((user,i)=>{
                            return(
                                <tr key={i}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.state}</td>
                            <td>
                                <button className="btn bg-danger " onClick={()=>deleteUser(i)}>X</button>
                            </td>
                            </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

            </div>

            
        </div>
     )

}
export default Formdemo;