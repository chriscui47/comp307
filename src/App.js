import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Register from "./Register";
import Logout from "./Logout";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Form, FormGroup, FormText, FormLabel
  , FormControl, Button,
Navbar, NavbarBrand, NavLink, Container, Nav} from 'react-bootstrap';
  
export default function App() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/logout">Logout</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      <Routes>
        <Route exact path="/" element={<Layout />}></Route>
          <Route path="register" element={<Register />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      
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
