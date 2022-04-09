import './App.css';
import styles from './Register.module.css';
import React, { useState } from 'react';
import { useRef } from 'react';
import { Navigate } from "react-router-dom";
import { post } from "./Helper";


function Login() {
  const userNameRef= useRef();
  const passWordRef = useRef();
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className={styles.register}>
      { loggedIn ? (<Navigate push to="/dashboard"/>) : null /** If logged in, redirect to dashboard */}
      <form>
        Username <br />
        <input type="text" required id='username' ref={userNameRef}></input> <br />
        Password <br />
        <input type="text" required id='password' ref={passWordRef}></input>
        <br />  <br />

        <button type="button" onClick={ () => { // Handle logging in
          const enteredUserName = userNameRef.current.value;
          const enteredPassWord = passWordRef.current.value;
          const userData = {
          username: enteredUserName,
          password: enteredPassWord,
          }      
          // Get data, check if exists or not, if exists, set logged in to true, create
          // k-v pairs in local storage corresponding to this users permissions and their ID
          post('https://ta-management-47.herokuapp.com/api/user/login', userData).then(
            response => { if (!response) {
                return null;
            }
            else { // Set k-v pairs in local storage to indicate if a user was logged in.
              setLoggedIn(true);
              console.log(response);
              localStorage.setItem("perm", response.role);
              localStorage.setItem("id", response.student_id);
              localStorage.setItem("DBID", response.id);
            }
            }
          )
          }
          }>
        Login</button>
        
      </form>
    </div>
  );
}

export default Login;