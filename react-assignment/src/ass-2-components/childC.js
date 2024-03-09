import ChildG from "./childG";
function ChildC() {
    return (
      <div className="C" style={{ border: "1px solid black", width: "170px", height: "200px", marginLeft: "20px", textAlign: "center", marginTop: "100px",display:"inline-block",backgroundColor:" #eaf5e4" }}>
        <h3>C</h3>
        <ChildG></ChildG>
      </div>
    );
  }
  
  export default ChildC;
  