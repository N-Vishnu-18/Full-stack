function User(props)
{
  return(
        <div className="col-md-3 mb-4 text-center"  >
          <div className="card" style={{backgroundColor:"#47627d",color:"white"}} >
            <div className="card-body">
              <h5 className="card-title">{props.user.name}</h5>
              <p className="card-text">{props.user.email}</p>
              <button className="btn"  style={{backgroundColor:"rgba(255, 255, 255, 0.558)"}}onClick={()=>props.adu(props.user)}>
                Add User
              </button>
            </div>
          </div>
        </div>
      
  )
}
export default User;
