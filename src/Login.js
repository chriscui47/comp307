import './App.css';
import styles from './Register.module.css';
import React, { useState } from 'react';
import { useRef } from 'react';
import { Navigate } from "react-router-dom";

function Login() {
  const userNameRef= useRef();
  const passWordRef = useRef();
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className={styles.register}>
      { loggedIn ? (<Navigate push to="/dashboard"/>) : null }
      <form>
        Username <br />
        <input type="text" required id='username' ref={userNameRef}></input> <br />
        Password <br />
        <input type="text" required id='password' ref={passWordRef}></input>
        <br />  <br />

        <button type="button" onClick={ async e => {
          const enteredUserName = userNameRef.current.value;
          const enteredPassWord = passWordRef.current.value;
            const userData = {
            username: enteredUserName,
            password: enteredPassWord,
            }        
           
            await fetch('https://ta-management-47.herokuapp.com/api/user/login', {
             // Configure
             method: 'POST',
             body: JSON.stringify(userData),
             headers: {
               'Content-Type': 'application/json' // Denote we are sending JSON data.
             }

           }).then(
               response =>
               {
                 console.log(response.status);
               if (response.status===200) {
                  setLoggedIn(true);
                  localStorage.setItem("user", "yes");
                  
               }
               else {
                 setLoggedIn(false);
                 localStorage.clear();
               }
              }
             
           );
          }}>
        Login</button>
        
      </form>
    </div>
  );
}

export default Login;