function user(props){
    
    return(
    <div className="card p-4" style={{flex:"1",margin:"5px"}}>
      <img src={props.data.image} alt="not found" className=" rounded-5 d-block mx-auto" style={{height:"100px",width:"100px"}}></img>
        <div className="card-body">
             <h5 className="title  text-success" style={{height:"115px",textAlign:"justify"}}>{props.data.title}</h5>
             <p className="lead " style={{fontSize:"16px",textAlign:"justify"}}>{props.data.description}</p>

        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">${props.data.price}</li>
          <li class="list-group-item text-secondary text-center">({props.data.category})</li>
          <li class="list-group-item text-justify text-info text-center"> Rating: {props.data.rating.rate} ({props.data.rating.count})</li>
        </ul>
     </div>
    )
}

export default user;