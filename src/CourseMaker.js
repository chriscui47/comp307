import './App.css';
import styles from './Register.module.css';
import {Form, FormGroup, FormText, FormLabel
, FormControl, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import { useRef } from 'react';
function CourseMaker() {

  const courseNumRef= useRef();
  const courseNameRef = useRef();
  const termRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const nameRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const courseNum = courseNumRef.current.value;
    const courseName = courseNameRef.current.value;
    const term = termRef.current.value;
    const month = monthRef.current.value;
    const year = yearRef.current.value;
    const name = nameRef.current.value;

    const courseData = {
      term_month_year: term.concat(" ", month, " ", year),
      course_num: courseNum,
      course_name: courseName,
      instructor_assigned_name: name
    }
    console.log(courseData);

    // Send to server to store in DB. (HTTP Request)
   fetch("https://ta-management-47.herokuapp.com/api/course/create", {
     // Configure
     method: 'POST',
     body: JSON.stringify(courseData),
     headers: {
       'Content-Type': 'application/json' // Denote we are sending JSON data.
     }

   }).then(
     // Add logic
     response => console.log(response)
     ); 
  }

  return (
    <div className={styles.register}>
      <form onSubmit={submitHandler}>
          
        Course Number <br />
        <input type="text" required id='number' ref={courseNumRef}></input> <br />
        <br />
        Course Name <br />
        <input type="text" required id='name' ref={courseNameRef}></input> <br />
        <br />
        
        Term <br />
        <select required id='term' ref={termRef}>
        <option value="3">Summer</option>
        <option value="2">Winter</option>
        <option value="1">Fall</option>
        </select>
        <br />
        Month <br />
        <select required id='month' ref={monthRef}>
        <option value="1">Jan</option>
        <option value="2">Feb</option>
        <option value="3">Mar</option>
        <option value="4">Apr</option>
        <option value="5">May</option>
        <option value="6">Jun</option>
        <option value="7">Jul</option>
        <option value="8">Aug</option>
        <option value="9">Sept</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
        </select>
        < br />
        Year <br />
        <input type="text" required id="year" ref={yearRef}></input> <br/>
    
        Instructor Name <br />
        <input type="text" required id='name' ref={nameRef}></input> <br />
       
      < br />
      <br />
        <button onSubmit={submitHandler}>Create Course</button>
      </form>
    </div>
  );
}

export default CourseMaker;
