import styles from './Course.module.css';
import TA from './TA.js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import TAComments from './TAComments';
import {get} from "./Helper";

// Component representing generic course, use props to specify exactly what feature for a course should be shown
function Course(props) {
    // States to update necessary information.
    const [showTAs, setShowTAs] = useState(false);
    const [allUsers, setAllUsers] = useState([]);
    const [currentTAs, setCurrentTAs] = useState([]);
    const [courseTerm, setCourseTerm] = useState(["N/A"]);
    useEffect(() => { // Get all users initially
        get("https://ta-management-47.herokuapp.com/api/user").then(response => {setAllUsers(response)});
        get(`https://ta-management-47.herokuapp.com/api/user/course/?id=${props.id}&isStudent=false`).then(response => {setCurrentTAs(response)});
        // Convert term_month_year to readable value
        var term="";
        if (props.term) {
            if (props.term.charAt(0) == "1") {
                term="Fall";
            }

            else if (props.term.charAt(0) == "2") {
                term="Winter";
            }

            else if (props.term.charAt(0) == "3") {
                term="Summer";
            }
            setCourseTerm(term.concat(" ", props.term.substr(-4))); // Get year from last 4 strings 
        }
        
        
    }, []); 

    return (
    <li>
        {/** Generic class features (information about course that will always need to be displayed) */}
        <div className={styles.course}>
        <div>
            <h3>Course Name: {props.name} </h3>
        </div>
        <div>
            <h3>Course Code: {props.code} </h3>
        </div>
        <div>
            <h3>Professor: {props.professor ? props.professor.last_name : "N/A"}</h3> 
        </div>
        <div>
            <h3>Semester: {courseTerm} </h3> 
        </div>

        {/** If editting a TA in a course */}
        {props.edit &&
        <button onClick={
            function() {
                setShowTAs(!showTAs);
                // Update users in class here.
                get(`https://ta-management-47.herokuapp.com/api/user/course/?id=${props.id}&isStudent=false`).then(response => setCurrentTAs(response));

        }}>Edit TAs</button> 
        
        }
        {/** If using performance log */}
        {props.log && 
            <button onClick={
                function() {
                    setShowTAs(!showTAs);
                   
                    
            }}>Show TAs and Comments</button>
        }

        {/** If using performance log */}
        {props.rate && <button onClick={
            function() {
                setShowTAs(!showTAs);
                get(`https://ta-management-47.herokuapp.com/api/user/course/?id=${props.id}&isStudent=false`).then(response => {setCurrentTAs(response)});
        }}>Show TAs</button> 
            
        }


       </div>
      
        {(props.log) && // For adding comments to TA log, or using the rate feature.
        <div>

        {showTAs && <div className={styles.dropdown}>
       <ul>
            Add a comment or view previously made comments. 
           
        {
         // Here get list of TAs    
         props.users
         .filter(user => user.role_name.charAt(2)==1) // Filter by TAs. 
         .map(user => <TAComments required key = {user.id} manage = {true} id= {user.id} course_id = {props.id} fname={user.first_name} lname={user.last_name} />)
     
        }
        </ul>
       </div>}      
        </div>   
        }
        
        {props.rate && // Mapping for rating
        <div> 
            {
                showTAs && <div className={styles.dropdown}>
                    <ul>
                        Add a rating! 
                        {
                            currentTAs
                            .filter(user => user.role_name.charAt(2)==1) // Filter by TAs. 
                            .map(user => <TAComments required key = {user.id} rate={true} id= {user.id} course_id = {props.id} fname={user.first_name} lname={user.last_name} />)
                        }
                    </ul>
                    </div>
            }

        </div>

        }

        {props.edit && // For editing TA privledges (TA Administration)
            <div>
                

        {showTAs && <div className={styles.dropdown}>
        <div className={styles.msg}> Register/unregister TAs for {props.code}. If registering, please indicate hours below.</div>
       <ul>

       { // map all TAs registered, denote registered with checked field
        currentTAs.map(user => <TA required key = {user.id} id = {user.id} code = {props.id} fname={user.first_name} lname={user.last_name} 
            hours = {user.registration.hours} checked={true}/>)
        }
        {
         // Map all TAs not currently registered 
         allUsers
         .filter(user => user.role_name.charAt(2)==1 && !currentTAs.some(el => el.id == user.id))
         .map(user => <TA required key = {user.id} id = {user.id} code = {props.id} fname={user.first_name} lname={user.last_name} 
             checked={false}/>)
        }
        
        </ul>
       </div>}

       
        </div>
        }

    
        
    </li>);
    
}

export default Course;