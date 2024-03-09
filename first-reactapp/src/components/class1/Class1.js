import './Class1.css';
import img1 from "../images//pic1.avif"
function class1()
{    // state
    //class-1 data
    let a = 10;
    let skills = ["js", "react", "html", "css"];

    
    return(
        <div>
            <h2>Class-1:</h2>

                <h4 className='text-danger display-4 bg-warning' style={{margin:"auto",width:"300px"}}>Bootstrap</h4>

                <p>Image from a google link</p>
                <img
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1380&t=st=1702795061~exp=1702795661~hmac=de380f64f5ffdfcf1243c6ec57310b01ecb670d7b924d27714da6902330f8533"
                alt="Mountain Lake"
                style={{width:"200px"}}
                />

                <p>Image downloaded into src</p>
                <img
                src={img1}
                alt="Mountain Lake"
                style={{width:"200px",marginBottom:"15px"}}
                />

                <h4 style={{ backgroundColor: "red", color: "white",margin:"auto",width:"300px",marginBottom:"15px" }}>Inline CSS</h4>

                <p>Value of a is "{a}",the value of a is dynamically shown</p>

                <p>Iterating through an array containing skills</p>
                {skills.map((skill, i) => (
                <h6 key={i}>{skill}</h6>
                ))}
                <p>End of Iteration</p> 
        </div>
    )
}

export default class1