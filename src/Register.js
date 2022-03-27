import logo from './logo.svg';
import './App.css';
import styles from './Register.module.css';
import {Form, FormGroup, FormText, FormLabel
, FormControl, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import { useRef } from 'react';
function Register() {

  const userNameRef= useRef();
  const passWordRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const enteredUserName = userNameRef.current.value;
    const enteredPassWord = passWordRef.current.value;

    const userData = {
      username: enteredUserName,
      password: enteredPassWord,
    }
    // Send to server to store in DB. (HTTP Request)
   fetch('URL-TO-SEND-REQUEST', {
     // Configure
     method: 'POST',
     body: JSON.stringify(userData),
     headers: {
       'Content-Type': 'application/json' // Denote we are sending JSON data.
     }

   }); // JS, allows us to send HTTP requests.
  }

  return (
    <div className={styles.register}>
      <form onSubmit={submitHandler}>
        First Name <br />
        <input type="text" required id='username' ref={userNameRef}></input> <br />
        Last Name <br />
        <input type="text" required id='username' ref={userNameRef}></input> <br />
        Student ID <br />
        <input type="text" required id='username' ref={userNameRef}></input> <br />
        First Name <br />
        <input type="text" required id='username' ref={userNameRef}></input> <br />
        Username <br />
        <input type="text" required id='username' ref={userNameRef}></input> <br />
        Password <br />
        <input type="text" required id='password' ref={passWordRef}></input>
        <br />
        User Type <br />
        <select name = "book">
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
