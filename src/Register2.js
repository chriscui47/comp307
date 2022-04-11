import { useState } from 'react';
import LinkLogin from './LinkLogin';
import { Navigate } from "react-router-dom";
import { useRef } from 'react';
import { useEffect } from 'react';
import { get, post, put } from './Helper';


function Register() {
        var permissions = Array.from({length: 5}, (v, i) => 0); // Set all to zero.
        // Checking what stage of registration depending on how user has interacted with page.
        const [stageOneCompleted, setStageOne] = useState(false);
        const [verified, setVerified] = useState(false);
        const [registered, setRegistered] = useState(false);
        // Getting values of information.
        const [userName, setUserName] = useState("");
        const [fname, setFname] = useState("");
        const [lname, setLname] = useState("");
        const [studentID, setStudentID] = useState();
        const [email, setEmail] = useState("");
        const [verPerm, setVerPerm] = useState("");
        const [isStudent, setStudent] = useState(false);
        const [courses, setCourses] = useState([]);
        const [jsonID, setjsonID] = useState();
        const [selectedCourses, setSelectedCourses] = useState([]);
        // References for getting fields filled out.
        const userNameRef= useRef();
        const passWordRef = useRef();
        const firstNameRef = useRef();
        const lastNameRef= useRef();
        const studentIDRef = useRef();
        const emailRef = useRef();

        // Handle user selecting or unselecting a course.
        function addOrRemoveCourse(i) {
            if (selectedCourses.includes(i)) {
                setSelectedCourses(selectedCourses.filter(el => el != i));
            }
            else {
                var arr = [...selectedCourses];
                arr.push(i);
                setSelectedCourses(arr);
            }
        }
        
        // Handle user selecting or unselecting a permission.
        function getClicked(i) {
            if (permissions[i]==0) {
                permissions[i]=1;
                return;
            }
            permissions[i]=0;
        }

        // Handle different cases in 'stage one' of registration
        function stageOne(e) {
            e.preventDefault();
            setStageOne(true);
            setVerPerm(permissions.join(" "));
            setUserName(userNameRef.current.value);
            if (permissions[0]==1) { // Student
                    setVerified(true);
                    setStudent(true);

                    return;
                }
            const data = {
                username: userNameRef.current.value
            }

            post("https://ta-management-47.herokuapp.com/api/user/isitadded", data)
            .then(resp => {
                if (!resp) {
                    return;
                }
                else {
                    setFname(resp.first_name);
                    setLname(resp.last_name);
                    setStudentID(resp.student_id);
                    setEmail(resp.email);
                    setVerPerm(resp.role_name);
                    setVerified(true);      
                    setjsonID(resp.id);  
                }
            })

           
        }

        function completeRegistration(e) {
            e.preventDefault();

            const userData = {
                first_name: firstNameRef.current.value,
                last_name: lastNameRef.current.value,
                email: emailRef.current.value,
                student_id: studentIDRef.current.value,
                username: userName,
                password: passWordRef.current.value,
                role_name: verPerm
            }

            if (isStudent) {

                post('https://ta-management-47.herokuapp.com/api/user/create', userData).then( // Create user
                    resp =>  {post('https://ta-management-47.herokuapp.com/api/user/register', { // Register in courses
                        user_id: resp.id,
                        course_ids: JSON.stringify(selectedCourses),
                        isStudent: "true",
                        hours: 0
                    }); 
                }
                )
               
            }
            else {
                put("https://ta-management-47.herokuapp.com/api/user/edit", userData);
            }

            setRegistered(true);
        }
        // Set courses.
        useEffect(() => {
            get("https://ta-management-47.herokuapp.com/api/courses").then(response => {setCourses(response)} );
          }, []); 
    return (
        
        registered ? (<Navigate push to="/"/>) :
        <div style={{margin: 10}}>
            {localStorage.clear()} {/** Clear local storage upon logging out. */}
            {/* In stage one*/ }
            {!stageOneCompleted && <div>
            Enter username, and select student if you wish to enroll solely as a student. < br />
            <form onSubmit={stageOne}>
            Username <br />
            <input type="text" required id='username' ref={userNameRef}></input> <br />

            
            <input type="checkbox" id="student" name="student" onClick={() => getClicked(0)}></input> Student<br />
            
            <br />
            <button>Continue Registration</button>
            </form>
            </div>}

            {(stageOneCompleted && !verified) && // Not registered properly.
            <div>
                <LinkLogin />
            </div>
            }
            {
                (stageOneCompleted && verified) && // Here, allow to finish registration
                <div> 
                    Hi, <strong>{userName}</strong>! Please finish your registration or verify your information. <br />
                    <form onSubmit={completeRegistration}>
                        First Name <br />
                        <input type="text" required id='fname' ref={firstNameRef} defaultValue={fname}></input> <br />
                        Last Name <br />
                        <input type="text" required id='lname' ref={lastNameRef} defaultValue = {lname}></input> <br />
                        Student ID <br />
                        <input type="number" required id='id' ref={studentIDRef} defaultValue ={studentID}></input> <br />
                        Password <br />
                        <input type="text" required id='password' ref={passWordRef}></input>
                        <br />
                        Email <br />
                        <input type="text" required id='email' ref={emailRef} defaultValue={email}></input> <br />

                        {/** If student, show all courses, ask to register. Then, update accordingly in registration. */
                            isStudent &&
                            <div>
                                
                                    {courses.map(course =>
                                    <div>
                                        {course.course_name} <br />
                                        <input type="checkbox" id={course.id} onClick = {() => addOrRemoveCourse(course.id)}></input>
                                    </div> 
                                        
                                    )}
                                

                            </div>
                        }

                        <button>Complete Registration</button>
                    </form>
                </div>

                
            }

        </div>
    )

}

export default Register;