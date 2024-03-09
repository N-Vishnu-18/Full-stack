import {useState} from 'react'
import Users from "../class3/users/users";

function Class3(props){

    let [counter,setCounter]=useState(1)
    let [username,setUsername]=useState('Vishnu')
   function increCounter(){
      setCounter(counter+1)
   }
   const [i, setI] = useState(0);

   function changeName() {
     console.log(i);
     const newUsername = i % 2 === 0 ? 'Harsha' : 'Vishnu';
     setUsername(newUsername);
     setI(i + 1);
   }
   let [emp,setEmp]=useState({eid:100,ename:"vishnu",city:"hyd"});
   function changeempdata()
   {
      setEmp({city:"chennai",exp:"5years",...emp})
   }
  
      return(
      <div>
         <h2>Class-3:</h2>
         <h4  className='text-danger display-4 bg-warning' style={{margin:"auto",width:"800px"}}>Transfering data from parent to child</h4>
         <h4>The data shared is={props.data}</h4>
         <h4>Similarly we can also share "Objects"</h4>
         <Users/>
         <h4 className='text-danger display-5 bg-warning' style={{margin:"auto",width:"400px",marginTop:"100px"}}>State demo</h4>
         <h4 >{counter}</h4>
         <h4 >{username}</h4>
         <button className="btn btn-success" onClick={increCounter}>Increement</button>
         <button className="btn btn-success" onClick={changeName}>changename</button>
          <h4>{emp.eid}</h4>
          <h4>{emp.ename}</h4>
          <h4>{emp.city}</h4>
          <h4>{emp.exp}</h4>
         <button className="btn btn-success" onClick={changeempdata}>changedata</button>


      </div>
      )
  }
  
  export default Class3;