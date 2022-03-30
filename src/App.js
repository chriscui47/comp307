import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Register from "./Register";
import Logout from "./Logout";
import Login from "./Login";
import CourseList from "./CourseList";
import Dash from "./Dash";

import {Form, FormGroup, FormText, FormLabel
  , FormControl, Button,
Navbar, NavbarBrand, NavLink, Container, Nav} from 'react-bootstrap';
  
export default function App() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="/">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/logout">Logout</Nav.Link>
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <CourseList url="https://ta-management-47.herokuapp.com/api/courses/user/?student_id=1" />
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
          <Route path="register" element={<Register />
        } />
          <Route path="logout" element={<Logout />} />
          <Route path="dashboard" element = {
          <Dash/>} />
          <Route path="SysOp">

          </Route>
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
