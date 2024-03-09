import ChildE from "./childE";
import ChildF from "./childF";
function ChildB() {
    return (
      <div className="B" style={{ border: "1px solid black", width: "250px", height: "200px", marginLeft: "20px", textAlign: "center", marginTop: "100px",display:"inline-block",backgroundColor:" #eaf5e4" }}>
        <h3>B</h3>
        <ChildE></ChildE>
        <ChildF></ChildF>
      </div>
    );
  }
  
  export default ChildB;
  