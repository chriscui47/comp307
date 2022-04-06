import Course from "./Course";
import styles from "./AllCourses.module.css"
import React, { useState } from 'react';
import { useEffect } from 'react';

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
        get(props.url).then(response => {setData(response); console.log(response)} );
      }, []); 
    return (     // CourseTA, CourseLog
        <section className={styles.dashboard}>     
            <ul className={styles.courselist}>

        {props.log && data.map(course => <Course required key = {course.id} users = {course.users} log = {props.log} id={course.id} code = {course.course_num} professor = {course.instructor_assigned_name} term = {course.term_month_year} />)}

        {props.edit && data.map(course => <Course required key = {course.id} users = {course.users} edit = {props.edit} id={course.id} code = {course.course_num} professor = {course.instructor_assigned_name} term = {course.term_month_year} />)}
        
        {/** Add logic here for TA rate */}
        
       
        
        </ul>
        </section> 
  

      );
    
}
export default CourseList;