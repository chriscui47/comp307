
import React, { useState } from 'react';
import { useEffect } from 'react';
import { get } from "./Helper";

// Append a course id to courses list
function append(courses, id) {
    const s = [...courses];
    s.push(id);
    return s;
}

function CourseRegister() {
    // Initially set all courses.
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        get("https://ta-management-47.herokuapp.com/api/courses").then(response => {setCourses(response)});
      }, []); 
    return (
        <div>
            {courses.map(course => // Map courses to checkboxes of courses that can be selected
            <div required key = {course.id}>
                {course.course_num}
                <input type="checkbox" required key = {course.id} onClick={() => 
                    
                    selectedCourses.includes(course.id) ? setSelectedCourses(selectedCourses.filter(el => el != course.id)) : setSelectedCourses(append(selectedCourses, course.id))   
                }>
                </input>
                < br />
                </div>
                )}

        <button onClick={() => console.log(selectedCourses)}>
        Submit Courses
        </button>
        </div>
    );
}

export default CourseRegister;