import React, { useState } from 'react';

import styles from './DashElement.module.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function DashElement(props) {
    return ( // A generic DashElement, populate with prop.values to get different dash elements.
        <Link to={props.url}>
        <div className={styles.element}>
        <div className={styles.content}>
            
            <button className={styles.button}>
            <h1>{props.title}</h1>
            </button>
        </div>
        </div>
        </Link>
    );
}

export default DashElement;