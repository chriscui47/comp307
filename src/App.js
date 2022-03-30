import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Logout from "./Logout";
import Login from "./Login";
import Dash from "./Dash";
import SysOp from "./SysOp";
import TARate from "./TARate";
import TAAdministration from "./TAAdministration";
import TAManagement from "./TAManagement";

import {Navbar, Container, Nav} from 'react-bootstrap';
  
export default function App() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="/">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/logout">Logout</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
          <Route path="register" element={<Register />
        } />
          <Route path="logout" element={<Logout />} />
          <Route path="dashboard" element = {
          <Dash/>} />
          <Route path="sysop" element={<SysOp/>} />
          <Route path="*" element={<NoMatch />} />
          <Route path="manage" element={<TAManagement />} />
          <Route path="rate" element={<TARate />} />
          <Route path="admin" element={<TAAdministration />} />

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
