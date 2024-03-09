import ChildD from "./childD";
function ChildA() {
  return (
    <div className="A" style={{ border: "1px solid black", width: "170px", height: "200px", marginLeft: "15px", textAlign: "center", marginTop: "100px",display:"inline-block",backgroundColor:" #eaf5e4"}}>
      <h3>A</h3>
      <ChildD></ChildD>
    </div>
  );
}

export default ChildA;
