import {useState} from "react"

function Apidemo2()
{   

    let [users,setUsers]=useState([])

     function getUsers(){
     fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(userslist=>setUsers(userslist))
    }
     

    return(
        <div style={{marginBottom:"100px"}}>
  
        <h1 className="text-center">API Demo Without useEffect Hook</h1>
        <h3 className="text-center">User-List</h3>
        <button className="btn btn-success" onClick={getUsers}>Get Users</button>
        <div className="container">
            {
                users.length===0?(<p className="display-6 text-danger">No Users</p>):(<table className="table table-center ">
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
              </table>)
            }


        </div>
        
        

        </div>
    )
}
export default Apidemo2;