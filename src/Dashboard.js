import Course from "./Course";
import styles from "./Dashboard.module.css"
import React, { useState } from 'react';
import { useEffect } from 'react';
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

    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => { if (localStorage.getItem("user")==="yes") {
        setLoggedIn(true);
    } }, []);

    return ( 
       
        <div>
    { loggedIn ?
           
        <section className={styles.dashboard}>

            <h2 className={styles.title}>Select a course:</h2>
            <ul className={styles.courselist}>
           { COURSES.map((course) => <Course key={course.code} code={course.code} professor = {course.prof} term={course.term}/>)}

        </ul>
        </section> 
  :
    <h1>Log in again</h1>}
        </div> );
    
}
export default Dashboard;