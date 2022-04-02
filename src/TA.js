import styles from "./TA.module.css";
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";

async function post(url, data){
    let res = await fetch(url, {method: 'POST', body: JSON.stringify(data), 
    headers: {
      'Content-Type': 'application/json' // Denote we are sending JSON data.
    }});  
  }

function TA(props) {
    var registered = props.checked;

    return ( // Use student ID to get courses.
    <li className={styles.screen}>
            <div className={styles.parent} >
            <div className={styles.name}>
            {props.fname} {props.lname}
            </div> 
            <div className={styles.box}>
            
            <input type="checkbox" id={props.id} defaultChecked={registered}
            
            onClick={
                function() {
                    var data = {
                        user_id: props.id.toString(),
                        course_id: props.code.toString()
                    }
                    if (registered) {
                        registered=false;
                        post('https://ta-management-47.herokuapp.com/api/user/unregister', data);
                    }
                    else {
                        registered=true;
                        post('https://ta-management-47.herokuapp.com/api/user/register', data);   
                    }
                    
                }
                
            }
            ></input>  
        
            </div>
        </div>


        </li>
    )
}

export default TA;