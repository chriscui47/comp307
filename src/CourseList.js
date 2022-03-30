import Course from "./Course";
import styles from "./AllCourses.module.css"
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getDefaultNormalizer } from "@testing-library/react";

// Function to async return courses from database.
async function get(url){
    let res = await fetch(url, {method: 'GET'});  
    if (res.status == 200) {
        let json = await res.json();
        return json;
    }
}
// Set state to denote recieved the data 
function CourseList(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        get(props.url).then(response => setData(response));
      }, []); 
    return (     
        <section className={styles.dashboard}>     
            <ul className={styles.courselist}>
        {data.map(course => <Course required key = {course.updatedAt} code = {course.course_num} professor = {course.instructor_assigned_name} term = {course.term_month_year} />)}
        </ul>
        </section> 
  

      );
    
}
export default CourseList;