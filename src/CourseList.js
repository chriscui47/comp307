import Course from "./Course";
import styles from "./AllCourses.module.css"
import React, { useState } from 'react';
import { useEffect } from 'react';
import { get } from "./Helper";


// Set state to denote recieved the data 
function CourseList(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        get(props.url).then(response => {setData(response) });
      }, []); 
    return (     // CourseTA, CourseLog
        <section className={styles.dashboard}>     
            <ul className={styles.courselist}>

        { // If using a course list for purpose of using the performance log, indicate so.
        (props.rate || props.log) && data.map(course => <Course required key = {course.id} name={course.course_name} users = {course.users} log = {props.log} rate = {props.rate} rateOrLog = {props.trueIfRateFalseIfLog} id={course.id} code = {course.course_num} professor = {course.professor} term = {course.term_month_year} />)}

        { // If using course list for editing TAs
        props.edit && data.map(course => <Course required key = {course.id} name={course.course_name} users = {course.users} edit = {props.edit} id={course.id} code = {course.course_num} professor = {course.professor}  term = {course.term_month_year} />)}
     
        </ul>
        </section> 
  

      );
    
}
export default CourseList;