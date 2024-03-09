function header()
{
   return(
    <div className="justify-content-center" style={{display:"flex",marginTop:"10px",flexDirection:"row",marginLeft:"50px",marginRight:"50px",backgroundColor:"#e89fd5",height:"65px",alignItems:"center",gap:"15px"}}>
        <h5 style={{display:"inline-block",flex:"3",marginLeft:"10px",marginBottom:"0px"}}>LOGO</h5>
        <button className="btn" style={{display:"inline-block",flex:"0.25",padding:"2px",height:"30px",backgroundColor:"#f08897",}}> home </button>
        <button className="btn" style={{display:"inline-block",flex:"0.25",padding:"2px",height:"30px",backgroundColor:"#f08897" }}> Sign-up </button>
        <button className="btn" style={{display:"inline-block",flex:"0.25",padding:"2px",height:"30px",backgroundColor:"#f08897",marginRight:"10px"}}> Sign-in</button>


    </div>
   )
}
export default header;