import { useEffect, useState} from "react"

function Apidemo()
{   

    let [users,setUsers]=useState([])
     useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(userslist=>setUsers(userslist))},[]
     )
   console.log(users)
    return(
        <div style={{marginBottom:"100px"}}>
  
        <h1 className="text-center">API Demo</h1>
        <h3 className="text-center">User-List</h3>
        <div className="container">
          <table className="table table-center ">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>

                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>
                    { return(
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>

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
export default Apidemo;