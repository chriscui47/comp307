import styles from './Course.module.css';
import TA from './TA.js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import TAComments from './TAComments';
import {get} from "./Helper";




function Course(props) {
    // States to update necessary information.
    const [showTAs, setShowTAs] = useState(false);
    const [allUsers, setAllUsers] = useState([]);
    const [currentTAs, setCurrentTAs] = useState([]);
    const [courseTerm, setCourseTerm] = useState(["N/A"]);
    useEffect(() => { // Get all users initially
        get("https://ta-management-47.herokuapp.com/api/user").then(response => {setAllUsers(response); console.log(response)});
        get(`https://ta-management-47.herokuapp.com/api/user/course/?id=${props.id}&isStudent=false`).then(response => {setCurrentTAs(response)});
        console.log(currentTAs);
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
            setCourseTerm(term.concat(" ", props.term.substr(-4)));
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
                get(`https://ta-management-47.herokuapp.com/api/user/course/?id=${props.id}&isStudent=false`).then(response => {setCurrentTAs(response); console.log(response)});

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

        {props.rate && <div>
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
        <div className={styles.msg}>Note TAs that are selected are currently TAs in {props.code}. <br /> Check/uncheck to change whether a TA is registered in this course.</div>
       <ul>
        {
         // Here get list of TAs    
         allUsers
         .filter(user => user.role_name.charAt(2)==1)
         .map(user => <TA required key = {user.id} hours = {user.hours} id = {user.id} code = {props.id} fname={user.first_name} lname={user.last_name} 
             checked={Array.from(currentTAs).some(el => el.id == user.id)}/>)
        }
        </ul>
       </div>}
        </div>
        }

    
        
    </li>);
    
}

export default Course;