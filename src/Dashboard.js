import Course from "./Course";
import styles from "./Dashboard.module.css"
const COURSES = [
    { 
        code: "COMP202",
        prof: "Vybihal",
        term: "Winter 2022",
    },
    {
        code: "COMP250",
        prof: "Robillard",
        term: "Summer 2022"
    }
]

function Dashboard() {
    return (
        <section className={styles.dashboard}>

            <h2 className={styles.title}>Select a course:</h2>
            <ul className={styles.courselist}>
        {   
        
            COURSES.map((course) => <Course key={course.code} code={course.code} professor = {course.prof} term={course.term}/>)
            
        }
        </ul>
        </section>
        
    

    );
    
}
export default Dashboard;