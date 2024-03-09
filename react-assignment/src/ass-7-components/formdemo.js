import {useState} from 'react';
import {useForm} from'react-hook-form';
import Userlist from './userlist';
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
        <div style={{marginTop:"40px"}} >
            <h1 className="text-center text-white">User Registration</h1>
            <div style={{margin:"auto",textAlign:"center",color:"white",backgroundColor:"rgba(255, 255, 255, 0.558)",width:"500px",padding:"40px",borderRadius:"15px"}} >
                
                <form className=" mx-auto " onSubmit={handleSubmit(handleFormSubmit)}>

                    <div className="mb-3" style={{maxWidth:"400px",margin:"auto"}}>
                        <label htmlFor="username" className="form-label">Username</label>

                        <input type="text"  
                        id='username' 
                        className="form-control" 
                        placeholder="username " 
                        {...register('username',{required:true,minLength:4,maxLength:8})}/>
                    </div>
                    {errors.username?.type==='required'&&<p className='text-danger'>Username is required</p>}
                    {errors.username?.type==='minLength'&&<p className='text-danger'>minLength should be 4</p>}
                    {errors.username?.type==='maxLength'&&<p className='text-danger'>maxLength should be 8</p>}


                    <div className="mb-3" style={{maxWidth:"400px",margin:"auto"}}>
                        <label htmlFor="date" className="form-label">Birthday</label>
                        <input 
                            type="date"  
                            id="date" 
                            name="date" 
                            className="form-control" 
                            placeholder="Date of Birth" 
                            {...register('dob',{required:true})}
                        />
                    </div>
                    {errors.dob?.type==='required'&&<p className='text-danger'>Date of Birth is required</p>}

                    <div className='mb-3'style={{maxWidth:"400px",margin:"auto"}}>
                    <select id="" className="form-select" {...register('state',{required:true})} defaultValue="">
                    <option value=""  disabled  >--state--</option>
                    <option value="telangana">Telangana</option>
                    <option value="andhra pradesh">Andhra pradesh</option>
                    <option value="tamil nadu">Tamil nadu</option>
                    </select>
                    {errors.state?.type==='required'&&<p className='text-danger'>State is required</p>}

                    <button className="btn-btnsucess" style={{borderRadius:"8px",marginTop:"20px"}}type="submit" >Add User</button>
                    </div >

                </form>
            </div>

            {/* table-of-users */}

            <div style={{margin:"auto",width:"1200px",marginTop:"40px"}}>
                <h1 className="text-center text-white" >User Table</h1>

                {users.length>0?(
                    <Userlist del={deleteUser} data={users} />
               ):(<p className=" fs-3 text-warning bg-danger w-50  text-center mx-auto" >Currently No Users</p>)
                }


            </div>

            
        </div>
     )

}
export default Formdemo;