import logo from './logo.svg';
import './App.css';
import styles from './Register.module.css';
import {Form, FormGroup, FormText, FormLabel
, FormControl, Button} from 'react-bootstrap';
import React, { useState } from 'react';

function Register() {
  return (
    <div>
      <form method="POST">
        Username <br />
        <input type="text" name="username"></input> <br />
        Password <br />
        <input type="text" name="password"></input>

      </form>
    </div>
  );
}

export default Register;
