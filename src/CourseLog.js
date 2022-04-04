import styles from './Course.module.css';
import TA from './TA.js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import TAComments from "./TAComments";

// Function to async return courses from database.
async function get(url){
    let res = await fetch(url, {method: 'GET'});  
    if (res.status == 200) {
        let json = await res.json();
        return json;
    }
}


function CourseTA(props) {
    const [showTAs, setShowTAs] = useState(false);
    return (
    <li>
        
        <div className={styles.course} >
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
                            setShowTAs(!showTAs);
                    }}>Show TAs and Comments</button>
       
       </div>
       {showTAs && <div className={styles.dropdown}>
       <ul>
       Add a comment or view previously made comments. < br />
        {
         // Here get list of TAs    
         props.users
         .filter(user => user.role_name.charAt(2)==1) // Filter by TAs. 
         .map(user => <TAComments required key = {user.id} id= {user.id} course_id = {props.id} fname={user.first_name} lname={user.last_name} />)
     
        }
        </ul>

        
          
       </div>}
    </li>);
}
export default CourseTA;