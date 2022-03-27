import logo from './logo.svg';
import './App.css';
import styles from './Register.module.css';
import {Form, FormGroup, FormText, FormLabel
, FormControl, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import { useRef } from 'react';

function Login() {

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
    console.log(userData);
    // Send to server to store in DB. (HTTP Request)
   fetch('https://ta-management-47.herokuapp.com/api/user/login', {
     // Configure
     method: 'POST',
     body: JSON.stringify(userData),
     headers: {
       'Content-Type': 'application/json' // Denote we are sending JSON data.
     }

   }); 
  }

  return (
    <div className={styles.register}>
      <form onSubmit={submitHandler}>
        Username <br />
        <input type="text" required id='username' ref={userNameRef}></input> <br />
        Password <br />
        <input type="text" required id='password' ref={passWordRef}></input>
        <br />  <br />
        <br />  <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;