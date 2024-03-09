function child(props)

{   
     return <div className="bg-warning p-1 mt-5 w-10 mx-auto"> 
    <h2 className="text-center">Child Component</h2>
    <div style={{width:"600px",margin:"auto",paddingLeft:"110px"}}>
        <button className="btn btn-danger text-center m-5" onClick={()=>props.func(0)}>Icreement</button>
        <button className="btn btn-danger text-center m-5" onClick={()=>props.func(1)}>Decrement</button>
    </div>
   
</div>
 
}
export default child;