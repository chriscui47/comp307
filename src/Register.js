import './App.css';
import styles from './Register.module.css';
import {Form, FormGroup, FormText, FormLabel
, FormControl, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import { useRef } from 'react';
function Register() {

  const userNameRef= useRef();
  const passWordRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef= useRef();
  const studentIDRef = useRef();
  const userTypeRef = useRef();
  const emailRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const enteredUserName = userNameRef.current.value;
    const enteredPassWord = passWordRef.current.value;
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
        First Name <br />
        <input type="text" required id='fname' ref={firstNameRef}></input> <br />
        Last Name <br />
        <input type="text" required id='lname' ref={lastNameRef}></input> <br />
        Student ID <br />
        <input type="text" required id='id' ref={studentIDRef}></input> <br />
        Username <br />
        <input type="text" required id='username' ref={userNameRef}></input> <br />
        Password <br />
        <input type="text" required id='password' ref={passWordRef}></input>
        <br />
        Email <br />
        <input type="text" required id='email' ref={emailRef}></input>
        <br />
        User Type <br />
        <select required id='usertype' ref={userTypeRef}>
        <option value="ta">TA</option>
        <option value="student">Student</option>
        <option value="sysop">System Operator</option>
        <option value="prof">Professor</option>
    </select>
      < br />
      <br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
