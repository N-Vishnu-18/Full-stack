function Child(props)

{   let b=1234
     return <div className="bg-warning p-1 mt-5 w-50 mx-auto"> 
    <h2 className="text-center">Child Component</h2>
     <p className="lead fs-4">Data from parent is={props.data}</p>
    <button className="btn btn-danger" onClick={()=>props.func(b)}>Send to parent</button>
</div>
 
}
export default Child;