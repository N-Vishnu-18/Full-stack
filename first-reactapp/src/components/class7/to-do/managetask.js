import React,{useState} from 'react'
import Taskcount from "./taskcount";
import Tasklist from "./tasklist";
import Addtask from "./addtask";
function Managetask()
{   let[tasks,setTasks]=useState([]);
    let a=1;
     return(
        <div>
            <div className="row">
                <h2 className="text-center">To-Do List</h2>
                <div className="col-sm-4 border p-4"><Addtask setTasks={setTasks} tasks={tasks}/></div>
                <div className="col-sm-4 border p-4"><Tasklist tasks={tasks} a={a}/></div>
                <div className="col-sm-4 border p-4"><Taskcount tasks={tasks} /></div>
            </div>
        </div>
     )
}
export default Managetask;
