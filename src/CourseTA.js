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

async function getWithBody(url, body){
    let res = await fetch(url, {method: 'GET',
    body: JSON.stringify(body)
});  
    if (res.status == 200) {
        let json = await res.json();
        return json;
    }
}

function CourseTA(props) {
    const [showTAs, setShowTAs] = useState(false);
    const [allUsers, setAllUsers] = useState([])
    const [currentTAs, setCurrentTAs] = useState([])
    useEffect(() => {
        get("https://ta-management-47.herokuapp.com/api/user").then(response => setAllUsers(response));;
        setCurrentTAs(props.users);
    }, []); 
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
                            // Update users in class here.
                            get(`https://ta-management-47.herokuapp.com/api/user/courses/?id=${props.id}`).then(response => setCurrentTAs(response));

                    }}>Edit TAs</button> <div className={styles.msg}>Note selected TAs are currently TAs for this class.</div>
       
       </div>
       {showTAs && <div className={styles.dropdown}>
       <ul>
        {
         // Here get list of TAs    
         allUsers.filter(user => user.role_name.charAt(2)==1)
         .map(user => <TA required key = {user.id} id = {user.id} code = {props.id} fname={user.first_name} lname={user.last_name} 
             checked={currentTAs.some(el => el.id == user.id)}/>)
     
        }
        </ul>
          
       </div>}
    </li>);
}
export default CourseTA;