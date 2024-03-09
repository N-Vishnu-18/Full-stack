
import {useForm} from'react-hook-form';
function Form()

{  
    let{register,handleSubmit,formState:{errors}}=useForm()
    console.log(errors)
    function handleFormSubmit(userobj)
    {
    }
     return(
        <div style={{width:"800px",margin:"auto",marginTop:"10%",backgroundColor:"white",borderRadius:"10px",padding:"10px"}}>
            <h2>Registration Form</h2>
            

            <form className=" mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
              <div className="row justify-content-center" style={{marginBottom:"20px"}}>

                 <div className="mb-3" style={{maxWidth:"400px",margin:"auto"}}>
                    <label htmlFor="Firstname" className="form-label">Firstname</label>

                    <input type="text"  
                      id='Firstname' 
                      className="form-control" 
                      placeholder="Firstname " 
                      {...register('firstname',{required:true,minLength:4,maxLength:6})}/>
                  </div>
                   {errors.firstname?.type==='required'&&<p className='text-danger'>Username is required</p>}
                   {errors.firstname?.type==='minLength'&&<p className='text-danger'>minLength should be 4</p>}
                   {errors.firstname?.type==='maxLength'&&<p className='text-danger'>maxLength should be 6</p>}

                   <div className="mb-3" style={{maxWidth:"400px",margin:"auto"}}>
                        <label htmlFor="Lastname" className="form-label">Lastname</label>
                        <input 
                            type="text"  
                            id='Lastname' 
                            className="form-control" 
                            placeholder="Lastname" 
                            {...register('lastname',{required:true,minLength:4})}
                        />
                    </div>
                    {errors.lastname?.type==='required'&&<p className='text-danger'>Lastname is required</p>}
                    {errors.lastname?.type==='minLength'&&<p className='text-danger'>minLength should be 4</p>}
                    {errors.lastname?.type==='maxLength'&&<p className='text-danger'>maxLength should be 6</p>}
                </div>

              <div className="row justify-content-center"  style={{marginBottom:"20px"}}>

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

                    <div className="mb-3" style={{maxWidth:"400px",margin:"auto"}}>
                        <label className="form-label">Gender</label>
                        <div  style={{display:'flex',flexDirection:"row",gap:"20px"}}>
                            <input 
                                type="radio" 
                                name="gender" 
                                id="male" 
                                value="male" 
                                {...register('gender', { required: true })}
                            />
                            <label htmlFor="male">Male</label><br />
                            <input 
                                type="radio" 
                                name="gender" 
                                id="female" 
                                value="female" 
                                {...register('gender', { required: true })}
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    {errors.gender?.type==='required'&&<p className='text-danger'>Gender is required</p>}
              </div>

              <div className="row justify-content-center"  style={{marginBottom:"20px"}}>

                <div className="mb-3" style={{maxWidth:"400px",margin:"auto"}}>
                        <label htmlFor="email" className="form-label">Email</label>

                        <input type="email"  
                        id='email' 
                        className="form-control" 
                        placeholder="email" 
                        {...register('email',{required:true})}/>
                    </div>
                    {errors.email?.type==='required'&&<p className='text-danger'>Email is required</p>}

                    <div className="mb-3" style={{maxWidth:"400px",margin:"auto"}}>
                        <label htmlFor="phonenumber" className="form-label">PhoneNumber</label>
                        <input 
                            type="text"  
                            id='phonenumber' 
                            className="form-control" 
                            placeholder="PhoneNumber" 
                            {...register('phonenumber',{required:true,maxLength:10,minLength:10})}
                        />
                    </div>
                    {errors.phonenumber?.type==='required'&&<p className='text-danger'>PhoneNumber is required</p>}
                    {errors.phonenumber?.type==='minLength'&&errors.phonenumber?.type==='maxLength'&&<p className='text-danger'>Please give a 10 digit PhoneNumber</p>}

                </div>
                

                <div className='mb-3' style={{margin:"auto",marginLeft:"5px",marginRight:"5px",marginBottom:"10px"}}>
                    <select id="" className="form-select" {...register('subject',{required:true})}>
                        <option value="" defaultValue>--Select Subject--</option>
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="english">English</option>
                        <option value="history">History</option>
                    </select>
                    {errors.subject?.type==='required'&&<p className='text-danger'>Subject is required</p>}
                </div>

                <button type="submit" style={{width:"130px",marginLeft:"5px",color:"white",backgroundColor:"#1D62E2",border:"none",borderRadius:"4px",marginBottom:"5px"}}>Submit</button>
            </form>
        </div>
     )

}
export default Form;