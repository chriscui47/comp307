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
  const emailRef = useRef();

  var permissions = Array.from({length: 5}, (v, i) => 0); // Set all to zero.

  function getClicked(i) {
    if (permissions[i]==0) {
      permissions[i]=1;
      return;
    }
    permissions[i]=0;

  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(permissions);
    const enteredUserName = userNameRef.current.value;
    const enteredPassWord = passWordRef.current.value;
    const enteredfName = firstNameRef.current.value;
    const enteredlName = lastNameRef.current.value;
    const enteredStudentID = studentIDRef.current.value;
    const enteredUserType = permissions.join(' ');
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
        <input type="number" required id='id' ref={studentIDRef}></input> <br />
        Username <br />
        <input type="text" required id='username' ref={userNameRef}></input> <br />
        Password <br />
        <input type="text" required id='password' ref={passWordRef}></input>
        <br />
        Email <br />
        <input type="text" required id='email' ref={emailRef}></input> <br />
        Select Role(s)
    <br />
    <input type="checkbox" id="student" name="student" onClick={() => getClicked(0)}></input> Student<br />
    <input type="checkbox" id="ta" name="ta" onClick={() => getClicked(1)}></input> TA <br />
    <input type="checkbox" id="prof" name="prof" onClick={() => getClicked(2)}></input> Professor<br />
    <input type="checkbox" id="admin" name="admin" onClick={() => getClicked(3)}></input> TA Administrator<br />
    <input type="checkbox" id="sysop" name="sysop" onClick={() => getClicked(4)}></input> System Operator<br />
    
      <br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
