function Course(props) {
    return <li>
        <div>
            <h3>Course Code: {props.code} </h3>
        </div>
        <div>
            <h3>Professor: {props.professor}</h3> 
        </div>
        <div>
            <h3>Semester: {props.term} </h3> 
        </div>
        <button>Select Course</button>
        
    </li>
}
// On select course, redirect to given page using course that was selected. 
export default Course;