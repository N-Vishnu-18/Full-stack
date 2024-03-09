import { useEffect, useState} from "react"
import User from "./user"
function Users()
{   

    let [users,setUsers]=useState([])
     useEffect(()=>{
     fetch(' https://jsonplaceholder.typicode.com/users ')
    .then(res=>res.json())
    .then(userslist=>setUsers(userslist))},[]
     )
     let middleUsers = users.slice(0, users.length - 2);
     let lastTwoUsers = users.slice(users.length - 2);
     let [uc,setuc]=useState(0)
     let [addedUsers, setAddedUsers] = useState([]);
     function adduser(user) {
       if (!addedUsers.includes(user.id)) {
          setuc((uc) => uc + 1);
          setAddedUsers((prevUsers) => [...prevUsers, user.id]);
        }
     }

   
    return(
        <div style={{margin:"100px"}}>
         <h4 style={{textAlign:"center",width:"150px",height:"40px",margin:"auto",marginBottom:"30px",backgroundColor:"#ecf0f1",borderRadius:"8px",paddingTop:"5px"}}>{uc}</h4>
          <div className="row">
             {middleUsers.map((user) => (
              <User key={user.id} user={user} adu={adduser}/>
              ))}
         </div>
         <div className="row justify-content-center">
                {lastTwoUsers.map((user) => (
                 
                      <User user={user} key={user.id} adu={adduser} />
            ))}
          </div>
         </div>
    )
}
export default Users;