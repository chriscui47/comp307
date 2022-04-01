import styles from "./TA.module.css";
import React, { useState } from 'react';
import { useEffect } from 'react';
function TA(props) {
    return ( // Use student ID to get courses.
    <li className={styles.screen}>

            <div className={styles.parent} >
            <div className={styles.name}>
            {props.fname} {props.lname}
            </div> 
            <div className={styles.box}>
            <input type="checkbox" id={props.id} defaultChecked={props.checked}></input>  
            </div>
        </div>


        </li>
    )
}

export default TA;