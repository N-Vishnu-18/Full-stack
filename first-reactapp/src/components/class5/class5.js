import { useEffect,useState} from "react"
import Apidemo from "./apidemo"
import Apidemo2 from "./apidemo2"
import Formdemo from "./formdemo"
function Class5()
{    //useEffect doesnt return anything unlike useState
     //it is automatically executed after rendering and state changes
     let[cou,setcou]=useState(0)
     let[cou2,setcou2]=useState(10)

     useEffect(()=>{
     console.log("use effect called")},[cou2]
     )

     //useEffect only executes for counter 2 state changes only but not of cou
     function changecounter()
     {
       setcou(cou=>cou+1)
     }
     function changecounter2()
     {
       setcou2(cou2=>cou2-1)
     }

    return(
        <div>
            {/* side-effect should be done only after rendering we use useEffect Hook to ensure that */}
            <h2>class-5:</h2>
        <h2 className="text-center">Side Effects Demo</h2>
        <h4 className="text-center bg-secondary" style={{maxWidth:"100px",margin:"auto",borderRadius:"30px",marginBottom:"20px"}}>{cou}</h4>
        <h4 className="text-center bg-secondary" style={{maxWidth:"100px",margin:"auto",borderRadius:"30px",marginBottom:"20px"}}>{cou2}</h4>
        <button className="btn btn-success" style={{margin:"20px"}}onClick={changecounter}>+1</button>
        <button className="btn btn-success"  style={{margin:"20px"}}onClick={changecounter2}>-1</button>
        <Apidemo/>
        <Apidemo2/>
        <Formdemo/>
        </div>
    )
}
export default Class5;