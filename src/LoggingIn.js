import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Register from "./Register";
import Logout from "./Logout";
import Login from "./Login";
import Dashboard from "./Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';


import {Form, FormGroup, FormText, FormLabel
  , FormControl, Button,
Navbar, NavbarBrand, NavLink, Container, Nav} from 'react-bootstrap';

function LoggingIn() {
return (


<Routes>
          <Route path="*" element = {
          localStorage.getItem("user")==="yes" && <Dashboard />} />

      </Routes>
)
}

export default LoggingIn;