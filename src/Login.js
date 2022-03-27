import logo from './logo.svg';
import './App.css';
import styles from './Register.module.css';
import {Form, FormGroup, FormText, FormLabel
, FormControl, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import { useRef } from 'react';
import { Link } from "react-router-dom";

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


   }).then(response => console.log(response)

   ); 

   // Conditionally redirect to different page here. 
   //redirect


  }

  return (
    <div className={styles.register}>
      <form onSubmit={submitHandler}>
        Username <br />
        <input type="text" required id='username' ref={userNameRef}></input> <br />
        Password <br />
        <input type="text" required id='password' ref={passWordRef}></input>
        <br />  <br />

        <button>Login</button>
        
      </form>
    </div>
  );
}
/**
 *  <Link onClick={
          e => {
            if (1 > 0) {
              e.preventDefault();
              alert("Enter your username before creating lobby");
            }
            return null}

        } to={"/register"}>
        <button>Login</button>
        </Link>
 */
export default Login;