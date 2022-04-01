import styles from './Course.module.css';
import TA from './TA.js';
import React, { useState } from 'react';
import { useEffect } from 'react';


// Function to async return courses from database.
async function get(url){
    let res = await fetch(url, {method: 'GET'});  
    if (res.status == 200) {
        let json = await res.json();
        return json;
    }
}


function CourseTA(props) {
    var existingTAs = [];
    const [TAs, setTAs] = useState([]);
    const [showTAs, setShowTAs] = useState(false);
    useEffect(() => {
        get("for allusers").then(response => {setTAs(response)} );
        props.users.filter(user => user.role_name.charAt(2)==1)
        .forEach(user => existingTAs.push(user.id));
      }, []); 
    return (
    <li>
        
        <button className={styles.course} onClick="displayTAs">
        <div>
            <h3>Course Code: {props.code} </h3>
        </div>
        <div>
            <h3>Professor: {props.professor}</h3> 
        </div>
        <div>
            <h3>Semester: {props.term} </h3> 
        </div>
        <button onClick={
            function() {
                if (showTAs) {
                    setShowTAs(false);
                    return;
                }
                setShowTAs(true);
            }
        }>Edit TAs</button> 
        {showTAs && <ul>
        { // Add TAs that do exist in this course already, denote that they have been checked.
            props.users.map(user => <TA fname={user.first_name} lname={user.last_name} checked={true}/>) 
            
            
        }
        {   // Get all remaining TAs, denote that they haven't been checked. 
            TAs.filter(user => user.role_name.charAt(2)==1 && !existingTAs.includes(user.id)) // Add rest of TAs
            .map(user => <TA fname={user.first_name} lname={user.last_name} checked={false}/>)
        }
        </ul>
        }   
       </button>
      
        
    </li>);
    // Upon selecting course go somewhere.
}

export default CourseTA;