import logo from './logo.svg';
import './App.css';
import {Form, FormGroup, FormText, FormLabel
, FormControl, Button} from 'react-bootstrap';
import React, { useState } from 'react';

function Register() {
  const [count, setCount] = useState(0);
  return (
    <div>
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>   <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" />
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default Register;
