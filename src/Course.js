import styles from './Course.module.css';

function Course(props) {
    return (
    <li className={styles.course}>
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
        
    </li>);
}

export default Course;