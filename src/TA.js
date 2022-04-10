import styles from "./TA.module.css";
import { post } from "./Helper";
import { useRef } from 'react';

// Class for TA + feature of removing/adding a TA from a course

function TA(props) {
    var registered = props.checked;
    const hoursRef = useRef();

    
        function submitHandler(e) {
            e.preventDefault();
            if (registered) { // When selecting a course, register or unregister given on current
                // value of checkbox.
                var data = {
                    user_id: props.id.toString(),
                    course_id: props.code.toString(),
                }
                registered=false;
                post('https://ta-management-47.herokuapp.com/api/user/unregister', data);
            }
            else {

                var data = {
                    user_id: props.id.toString(),
                    course_ids: JSON.stringify([props.code]),
                    isStudent: "false",
                    hours: hoursRef.current.value.toString()
                }
                console.log(data);
                registered=true;
                post('https://ta-management-47.herokuapp.com/api/user/register', data);   
            }
        

    }

    return ( // Use student ID to get courses.
    <li className={styles.screen}>
            <div className={styles.parent} >
            <div className={styles.name}>
            {props.fname} {props.lname}
            </div> 
            <div className={styles.box}>
            <form onSubmit={submitHandler}>  
            <input type="checkbox" id={props.id} defaultChecked={registered} />
            
            <input type="number" style={{width: "40px", height: "25px", marginLeft: "10px"}}ref={hoursRef} defaultValue={props.hours}></input> Hours <br />
            <button style={{marginLeft: "10px"}}>Submit Changes</button>
            </form>
            </div>
        </div>


        </li>
    )
}

export default TA;