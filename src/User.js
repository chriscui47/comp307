import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { put, get, post } from "./Helper";
function User(props) {
   

    const[showDetails, setShow] = useState(false);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const userNameRef = useRef();
    const studentIDRef = useRef();
    const passWordRef = useRef();
    const emailRef = useRef();
    const [initReg, setInitR] = useState([]);
    const [initUnReg, setInitU] = useState([]);
    const [courses, setCourses] = useState([]);
    var permissions = Array.from({length: 5}, (v, i) => props.u.role_name.at(i*2)==1 ? 1 : 0);

    var setReg = [];
    var setUnReg = [];
    function getClicked(i) {
        permissions[i] == 0 ? permissions[i]=1 : permissions[i] = 0;
    }



    function submitHandler(event) {
        event.preventDefault();
        const perm = permissions.join(' ');
        const userData = {
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            email: emailRef.current.value,
            student_id: studentIDRef.current.value,
            username: userNameRef.current.value,
            password: passWordRef.current.value,
            role_name: perm.toString()
        }
        console.log(userData);
        
        put("https://ta-management-47.herokuapp.com/api/user/edit", userData).then(resp => window.location.reload(false));
        
        {/*
        .then(resp => // Edit user info
            {
                if (props.u.role_name.charAt(0)==1) { // Then register in selected courses
                    const register = setReg.filter(i => !initReg.includes(i));
                    console.log(register);
                    var data = {
                        user_id: props.u.id.toString(),
                        course_ids: JSON.stringify(register),
                        isStudent: "true",
                        hours: 0
                    }
                    console.log(data);
                    post('https://ta-management-47.herokuapp.com/api/user/register', data)
                    {/*
                    .then(resp => 
                    {
                        const unregister = setUnReg.filter(i => !initUnReg.includes(i));
                        console.log(unregister);
                        var data = {
                            user_id: props.id.toString(),
                            course_id: JSON.stringify(unregister),
                            
                        }
                        post('https://ta-management-47.herokuapp.com/api/user/unregister', data)
                    }
                    ); 
                }
                }
               

                
            }


        );
        
            */
        }
    }

    /** 

    // Update courses
    function changeCourse(id) {
        if (setReg.includes(id)) {
            setReg = setReg.filter(i => i != id);
            setUnReg.push(id);
        }
        else {
            setReg.push(id);
            setUnReg = setUnReg.filter(i => i != id);
        }
        
    }

    function addInit(id, flag) {
        if (flag) {
        var arr = [...initReg];
        arr.push(id);    
        setInitR(arr);
        setReg.push(id);
        }
        else {
            var arr = [...initUnReg];
            arr.push(id);
            setInitU(arr);
            setUnReg.push(id);
        }
    }

    useEffect(() => {
        get("https://ta-management-47.herokuapp.com/api/courses").then(response => {setCourses(response); 
        
        response
        .forEach(course => { // If some student in this course is a student and their id matches this users ID, add course ID to initReg
            course.users.some(user => // Else, add to initUnReg.
                user.registration.user_id == props.u.id && user.registration.isStudent) ? addInit(course.id, true) : addInit(course.id, false)
    }); 
        
    });
    console.log(initReg);
    console.log(initUnReg);

}, []);
*/
    

    return(
        <li>
            <button style={{width: "250px", padding: "5px", margin: "5px"}}onClick={() => setShow(!showDetails)}>{props.u.first_name} {props.u.last_name}</button>
            { showDetails && <div>
           <form onSubmit={submitHandler}>
                    First Name <br />
                    <input type="text" required id='fname' ref={firstNameRef} defaultValue={props.u.first_name}></input> <br />
                    Last Name <br />
                    <input type="text" required id='lname' ref={lastNameRef} defaultValue = {props.u.last_name}></input> <br />
                    Student ID <br />
                    <input type="number" required id='id' ref={studentIDRef} defaultValue ={props.u.student_id}></input> <br />
                    Username <br />
                    <input type="text" required id='username' ref={userNameRef} defaultValue={props.u.username}></input> < br />
                    Password <br />
                    <input type="text" required id='password' ref={passWordRef} defaultValue={props.u.password}></input>
                    <br />
                    Email <br />
                    <input type="text" required id='email' ref={emailRef} defaultValue={props.u.email}></input> <br /> <br />

                    <input type="checkbox" id="student" name="student" defaultChecked={props.u.role_name.at(0)==1} onClick={() => getClicked(0)}></input> Student<br />
                    <input type="checkbox" id="ta" name="ta" defaultChecked={props.u.role_name.at(2)==1}  onClick={() => getClicked(1)}></input> TA <br />
                    <input type="checkbox" id="prof" name="prof" defaultChecked={props.u.role_name.at(4)==1}  onClick={() => getClicked(2)}></input> Professor<br />
                    <input type="checkbox" id="admin" name="admin" defaultChecked={props.u.role_name.at(6)==1}  onClick={() => getClicked(3)}></input> TA Administrator<br />
                    <input type="checkbox" id="sysop" name="sysop" defaultChecked={props.u.role_name.at(8)==1}  onClick={() => getClicked(4)}></input> System Operator<br />


                     {/** If student, show all courses, ask to register. Then, update accordingly in registration. 
                            props.u.role_name.at(0)==1 &&
                            <div>
                                
                                    {courses.map(course =>
                                    <div>
                                        {course.course_name} <br />
                                        <input type="checkbox" key = {course.id} id={course.id} defaultChecked = {initReg.includes(course.id)} onClick = {() => changeCourse(course.id)}></input>
                                    </div> 
                                        
                                    )}
                                

                                </div>
                                    */}
                   
                    <button>Submit Changes</button>
           </form>
           <br />
           </div>
            }
        </li>
    )
}

export default User;