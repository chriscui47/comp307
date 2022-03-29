import React, { useState } from 'react';
import { useEffect } from 'react';

import styles from './DashElement.module.css';


function DashElement(props) {
    return (
        <div className={styles.element}>
        <div className={styles.content}>
            
            <button className={styles.button}>
            <h1>{props.title}</h1>
            </button>
        </div>
        </div>
    );
}

export default DashElement;