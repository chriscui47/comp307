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



var HttpClient = function() {
    this.get = function(aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", 'https://ta-management-47.herokuapp.com/api/courses', true );            
        anHttpRequest.send( null );
    }
}

function aSync3() {
var client = new HttpClient();
client.get(function(response) {
    console.log(response);
})
}
function AllCourses() {

    return (     
        <section className={styles.dashboard}>     
       <button onClick={aSync3}>Test</button>

            
            <h2 className={styles.title}>Course List:</h2>
            <ul className={styles.courselist}>
           { COURSES.map((course) => <Course key={course.code} code={course.code} professor = {course.prof} term={course.term}/>)}

        </ul>
        </section> 
  

      );
    
}
export default AllCourses;