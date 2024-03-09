function user(props){
    
    return(
    <div className="card p-4 " style={{margin:"40px",width:"300px",backgroundColor:"#4091bf"}}>
      <img src={props.data.avatar} alt="not found" className="d-block mx-auto" style={{height:"100px",width:"100px",borderRadius:"50%"}}></img>
        <div className="card-body">
             <h5 className="title  " style={{textAlign:"center",color:"black"}}>{props.data.first_name}{props.data.last_name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center" style={{backgroundColor:"#52ad7c"}}>${props.data.email}</li>
        </ul>
     </div>
    )
}

export default user;