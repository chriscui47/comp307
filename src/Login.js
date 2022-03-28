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

  return (
    <div className={styles.register}>
      <form>
        Username <br />
        <input type="text" required id='username' ref={userNameRef}></input> <br />
        Password <br />
        <input type="text" required id='password' ref={passWordRef}></input>
        <br />  <br />

        <Link onClick={ e => {
          const enteredUserName = userNameRef.current.value;
          const enteredPassWord = passWordRef.current.value;
          var errorCode;
            const userData = {
            username: enteredUserName,
            password: enteredPassWord,
            }        
            const xhr = new XMLHttpRequest();

            function foo () {
              if (xhr.readyState === 4) {
                errorCode=xhr.status;
              }};
              xhr.addEventListener("readystatechange", foo);
              xhr.open("POST", 'https://ta-management-47.herokuapp.com/api/user/login', true);
              xhr.send(userData);
            
            console.log(errorCode);
          
              /** 
               * 
            // Send to server to store in DB. (HTTP Request)
           fetch('https://ta-management-47.herokuapp.com/api/user/login', {
             // Configure
             method: 'POST',
             body: JSON.stringify(userData),
             headers: {
               'Content-Type': 'application/json' // Denote we are sending JSON data.
             }

           });
           */
            

           
          
             

        }} to={"/register"}>
        <button>Login</button>
        </Link>
        
      </form>
    </div>
  );
}

export default Login;