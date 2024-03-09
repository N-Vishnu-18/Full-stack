import Child from "./child";
import {useState} from'react';
function Parent()
{  

      let [cd,setcd]=useState(5)
      function getChildData(b)
      {  if(b===0)
          setcd(cd=>cd+1)
         else 
          setcd(cd=>cd-1)
      }
    return(
        
        <div className="bg-danger p-5 mt-5">
            <h2 className="text-center">Parent Component</h2>
            <p className="text-center text-black fs-3 mt-5 " style={{width:"80px",margin:"auto",backgroundColor:"white",borderRadius:"10px"}}>{cd}</p>
            <Child func={getChildData}/>
        </div>
    )
}
export default Parent;
