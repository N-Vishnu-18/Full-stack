function tasklist(props)
{   console.log(props.tasks)
     return(
        <div>
           <p className="lead fs-2 text-center">list of tasks</p>
          {
            props.tasks.map((taskobj,index)=><p className="lead" kry={index}>{taskobj.newtask}</p>)
          }
        </div>
     )
}
export default tasklist;
