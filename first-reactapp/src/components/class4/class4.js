import {useState} from 'react';
import Child from './child';
function Class4()
{  
    let userlist = [
        {
          id: 1,
          email: "user1@example.com",
          first_name: "John",
          last_name: "Doe",
          photo: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          id: 2,
          email: "user2@example.com",
          first_name: "Jane",
          last_name: "Doe",
          photo: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
          id: 3,
          email: "user3@example.com",
          first_name: "Alice",
          last_name: "Smith",
          photo: "https://randomuser.me/api/portraits/men/3.jpg"
        }
      ];
      let[index,setI]=useState(0)
      function changeUser()
      {
        let k=(index+1)%userlist.length;
        setI(k);
      }
      let a=10
      let [childdata,setcd]=useState('')
      function getChildData(b)
      {
         setcd(b)
      }
    return(
        
        <div className="bg-danger p-5 mt-5">
          <h2>Class-4:</h2>
            <h2 className="text-center text-black">Parent Component</h2>
            <h1 className="display-1 text-center text-info">User Info</h1>
            <button className="btn btn-warning mt-5 mb-5" onClick={changeUser}>Next</button>
            <div className="card w-50 p-4 mx-auto shadow-lg bg-light" style={{maxWidth:"400px"}}>
                <img src={userlist[index].photo} className="w-50 d-block mx-auto" alt=""></img>
                <div className="card-body ">
                    <p className="lead text-primary fs-1">{userlist[index].first_name} {userlist[index].last_name} </p>
                    <p className="lead text-seconady fs-2">{userlist[index].email} </p>
                
                </div>
            </div>
            <p className="text-center text-black fs-3 mt-5">Data from child is={childdata}</p>
            <Child data={a} func={getChildData}/>
        </div>
    )
}
export default Class4; 