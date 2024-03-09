
import User from "../users/user/user";
function users(props){
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
    return(
    <div style={{marginLeft:"200px",marginRight:"200px",marginTop:"50px"}}>
        
        <h4>User-List</h4>
        <div className="d-flex justify-content-between">
            <User data={userlist[0]}/>
            <User data={userlist[1]}/>
            <User data={userlist[2]}/>
        </div>
    </div>
    )
}

export default users;