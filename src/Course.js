import styles from './Course.module.css';
import TA from './TA.js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import TAComments from './TAComments';

// Function to async return courses from database.
async function get(url){
    let res = await fetch(url, {method: 'GET'});  
    if (res.status == 200) {
        let json = await res.json();
        return json;
    }
}


function Course(props) {
    const [showTAs, setShowTAs] = useState(false);
    const [allUsers, setAllUsers] = useState([]);
    const [currentTAs, setCurrentTAs] = useState([]);
    const [courseTerm, setCourseTerm] = useState(["N/A"]);
    useEffect(() => {
        get("https://ta-management-47.herokuapp.com/api/user").then(response => setAllUsers(response));
        setCurrentTAs(props.users);
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

        {props.edit &&
        <button onClick={
            function() {
                setShowTAs(!showTAs);
                // Update users in class here.
                get(`https://ta-management-47.herokuapp.com/api/user/courses/?id=${props.id}`).then(response => setCurrentTAs(response));

        }}>Edit TAs</button> 
        
        }

        {props.log && 
            <button onClick={
                function() {
                    setShowTAs(!showTAs);
                    console.log("clicked");
            }}>Show TAs and Comments</button>
        }
       </div>
      
        {(props.log || props.rate) && // For adding comments to TA log, or using the rate feature.
        <div>

        {showTAs && <div className={styles.dropdown}>
       <ul>
           { // Display different information for log or rate
           props.log ? <div>Add a comment or view previously made comments. < br /></div>
           : <div>Leave a rating!< br /></div>}
       
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

        {props.edit && // For editing TA privledges (TA Administration)
            <div>
                

        {showTAs && <div className={styles.dropdown}>
        <div className={styles.msg}>Note TAs that are selected are currently TAs in {props.code}. <br /> Check/uncheck to change whether a TA is registered in this course.</div>
       <ul>
        {
         // Here get list of TAs    
         allUsers
         .filter(user => user.role_name.charAt(2)==1)
         .map(user => <TA required key = {user.id} id = {user.id} code = {props.id} fname={user.first_name} lname={user.last_name} 
             checked={currentTAs.some(el => el.id == user.id)}/>)
        }
        </ul>
       </div>}
        </div>
        }

    
        
    </li>);
    
}

export default Course;