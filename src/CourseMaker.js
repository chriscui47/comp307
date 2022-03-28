import logo from './logo.svg';
import './App.css';
import styles from './Register.module.css';
import {Form, FormGroup, FormText, FormLabel
, FormControl, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import { useRef } from 'react';
function CourseMaker() {

  const courseRef= useRef();
  const lastNameRef = useRef();
  const courseIDRef = useRef();
  const instructionRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const course = courseRef.current.value;
    const last = passWordRef.current.value;
    const enteredfName = firstNameRef.current.value;
    const enteredlName = lastNameRef.current.value;
    const enteredStudentID = studentIDRef.current.value;
    const enteredUserType = userTypeRef.current.value;
    const enteredEmailRef = emailRef.current.value;

    const userData = {
      first_name: enteredfName,
      last_name: enteredlName,
      username: enteredUserName,
      password: enteredPassWord,
      student_id: enteredStudentID,
      role_name: enteredUserType,
      email: enteredEmailRef
    }
    console.log(userData);
    // Send to server to store in DB. (HTTP Request)
   fetch("https://ta-management-47.herokuapp.com/api/user/create", {
     // Configure
     method: 'POST',
     body: JSON.stringify(userData),
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
        <input type="text" required id='number' ref={courseRef}></input> <br />
        Course Name <br />
        <input type="text" required id='name' ref={courseNameRef}></input> <br />
        Term, Month, Year <br />
        <input type="text" required id='id' ref={course}></input> <br />
        Instructor Name <br />
        <input type="text" required id='username' ref={instructionRef}></input> <br />
        
      < br />
      <br />
        <button>Create Course</button>
      </form>
    </div>
  );
}

export default CourseMaker;
