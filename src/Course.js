import styles from './Course.module.css';


function Course(props) {
    return (
    <li>
        
        <button className={styles.course} onClick="displayTAs"
        >
        <div>
            <h3>Course Code: {props.code} </h3>
        </div>
        <div>
            <h3>Professor: {props.professor}</h3> 
        </div>
        <div>
            <h3>Semester: {props.term} </h3> 
        </div>
       </button>
      
        
    </li>);
    // Upon selecting course go somewhere.
}

export default Course;