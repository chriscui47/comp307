import Course from "./Course";
import styles from "./AllCourses.module.css"
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getDefaultNormalizer } from "@testing-library/react";

// Function to async return courses from database.
async function get(){
    let res = await fetch("https://ta-management-47.herokuapp.com/api/courses", {method: 'GET'});  
    if (res.status == 200) {
        let json = await res.json();
        return json;
    }
}
// Set state to denote recieved the data 
function AllCourses() {
    const [data, setData] = useState([]);
    get().then(response => setData(response))

    return (     
        <section className={styles.dashboard}>     
            <ul className={styles.courselist}>
        {data.map(course => <Course required key = {course.updatedAt} code = {course.course_num} professor = {course.instructor_assigned_name} term = {course.term_month_year} />)}
        </ul>
        </section> 
  

      );
    
}
export default AllCourses;