

function user(props){
    
    return(
    <div className="card p-4">
      <img src={props.data.photo} alt="not found" className="w-100 rounded-5 d-block mx-auto"></img>
        <div className="card-body">
             <p className="lead">{props.data.first_name} {props.data.last_name}</p>
             <p className="lead">{props.data.email}</p>


        </div>
     </div>
    )
}

export default user;