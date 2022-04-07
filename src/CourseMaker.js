import './App.css';
import styles from './Register.module.css';
import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
function CourseMaker() {

  // References to store information about a course.
  const courseNumRef= useRef();
  const courseNameRef = useRef();
  const termRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const profRef = useRef();
  // Function to handle submitting a course.
  function submitHandler(event) {
    event.preventDefault();

    const courseNum = courseNumRef.current.value;
    const courseName = courseNameRef.current.value;
    const term = termRef.current.value;
    const month = monthRef.current.value;
    const year = yearRef.current.value;
    const prof = profRef.current.value;

    const courseData = {
      term_month_year: term.concat(" ", month, " ", year),
      course_num: courseNum,
      course_name: courseName,
      fk_professor: prof
    }
    

    // Send to server to store in DB. (HTTP Request)
   fetch("https://ta-management-47.herokuapp.com/api/course/create", {
     // Configure
     method: 'POST',
     body: JSON.stringify(courseData),
     headers: {
       'Content-Type': 'application/json' // Denote we are sending JSON data.
     }

   }).then(
     resp => window.location.reload(false)
     ); 
  }

  // Function to async return courses from database.
  async function get(url){
    let res = await fetch(url, {method: 'GET'});  
    if (res.status == 200) {
        let json = await res.json();
        return json;
    }
  }


    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        get("https://ta-management-47.herokuapp.com/api/user").then(response => setAllUsers(response));     
    }, []); 

  return (

    <div className={styles.register}>
      <form onSubmit={submitHandler}>
          
        Course Number <br />
        <input type="number" required id='number' ref={courseNumRef}></input> <br />
        <br />
        Course Name <br />
        <input type="text" required id='name' ref={courseNameRef}></input> <br />
        <br />
        
        Term <br />
        <select required id='term' ref={termRef}>
        <option value="3">Summer</option>
        <option value="2">Winter</option>
        <option value="1">Fall</option>
        </select>
        <br />
        Month <br />
        <select required id='month' ref={monthRef}>
        <option value="1">Jan</option>
        <option value="2">Feb</option>
        <option value="3">Mar</option>
        <option value="4">Apr</option>
        <option value="5">May</option>
        <option value="6">Jun</option>
        <option value="7">Jul</option>
        <option value="8">Aug</option>
        <option value="9">Sept</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
        </select>
        < br />
        Year <br />
        <input type="number" required id="year" ref={yearRef}></input> <br/>
    
        Instructor Name <br />
        <div> {/** Filter by profs, and put in dropdown. */}
        <select required id = 'prof' ref = {profRef}>
          {allUsers
          .filter(user => user.role_name.charAt(4)==1)
          .map(prof => 
            <option required key = {prof.id} value={prof.id}>
              {prof.last_name}
            </option>
            )}
        </select>
        </div>
      < br />
      <br />
        <button onSubmit={submitHandler}>Create Course</button>
      </form>
    </div>
  );
}

export default CourseMaker;
