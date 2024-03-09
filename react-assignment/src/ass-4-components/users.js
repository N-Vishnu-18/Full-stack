
import User from "./user";
function users(props){
    let userlist =[
      {
        id: 1,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 2,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 3,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
      {
        id: 4,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
      },
      {
        id: 5,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg",
      },
      {
        id: 6,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://reqres.in/img/faces/12-image.jpg",
      },
    ];
    return(
    <div style={{marginLeft:"50px",marginRight:"50px",marginTop:"10px",backgroundColor:"#d0acc0"}}>
        
        <h4 className="text-center" style={{paddingTop:"20px"}}>Users List</h4>
        <div className="d-flex justify-content-center">
            <User data={userlist[0]}/>
            <User data={userlist[1]}/>
            <User data={userlist[2]}/>
            
        </div>
        <div className="d-flex justify-content-center">
            <User data={userlist[3]}/>
            <User data={userlist[4]}/>
            <User data={userlist[5]}/>   
        </div>
        
    </div>
    )
}

export default users;