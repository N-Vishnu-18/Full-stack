import './Class2.css';
function Class2(){

  let emps = [
    { eno: 100, name: "ravi", age: 21, city: "hyderabad" },
    { eno: 101, name: "sara", age: 25, city: "mumbai" },
    { eno: 102, name: "john", age: 30, city: "new york" },
    { eno: 103, name: "alice", age: 28, city: "london" },
    { eno: 104, name: "bob", age: 22, city: "paris" },
    { eno: 105, name: "emily", age: 26, city: "sydney" }
    ];
     
    function test()
    {
      console.log("test called");
    }
    function test2(a)
    {
      console.log("test2 a is:",a);
    }

    return(
    <div>
      <h2>Class-2:</h2>
      <h4>Employee data in a table</h4>
      <table className="table text-center">
          <thead>
            <tr>
              <th>Employee Number</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            {emps.map((empobj) => (
              <tr key={empobj.eno}>
                <td>{empobj.eno}</td>
                <td>{empobj.name}</td>
                <td>{empobj.age}</td>
                <td>{empobj.city}</td>
              </tr>
            ))}
          </tbody>
      </table>


      
      <h4>Employee data in cards</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
         {
          emps.map(empobj=>(
            <div className="col" key={empobj.eno}>
              <div className="card">
                <div className="card-body">
                   <h3>{empobj.eno}</h3>
                      <p className="lead">{empobj.name}</p>
                      <p className="lead">{empobj.age}</p>
                      <p className="lead">{empobj.city}</p>
                </div>
              </div>
            </div>
          ))
         }
      </div>
      

      
      <h4>Event handling</h4>
      <div className="container">
         <button className="btn btn-success"  onClick={test}>Click here</button>
      </div>
      <div className="container">
         <button className="btn btn-warning"  onClick={()=>test2(100)}>Click here</button>
      </div>
    </div>
    )
}

export default Class2