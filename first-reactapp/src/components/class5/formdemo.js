import React, { useState } from "react";

function Formdemo()

{   let[username,setUs]=useState("")
    
    function test(event)
    {
        console.log(event.target.value)
    }
    function handleEvent(event)
    {
        setUs(event.target.value)
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        console.log(username)
    }
     return(
        <div>
            <h1 className="text-center">Form Demo</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3" style={{maxWidth:"400px",margin:"auto"}}>
                    <label htmlFor="username" className="form-label">Username</label>

                    <input type="text" name="username " id='username' className="form-control" placeholder="username " onChange={handleEvent}/>
                </div>
                <div className="mb-3" style={{maxWidth:"400px",margin:"auto"}}>
                    <label htmlFor="password" className="form-label">Password</label>

                    <input type="password" name="password " id='password' className="form-control" placeholder="password " onChange={test}/>
                </div>
                <button className="btn-btnsucess" type="submit">login</button>
            </form>
        </div>
     )

}
export default Formdemo;