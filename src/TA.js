import styles from "./TA.module.css";
import { post } from "./Helper";


// Class for TA + feature of removing/adding a TA from a course

function TA(props) {
    var registered = props.checked;

    return ( // Use student ID to get courses.
    <li className={styles.screen}>
            <div className={styles.parent} >
            <div className={styles.name}>
            {props.fname} {props.lname}
            </div> 
            <div className={styles.box}>
            
            <input type="checkbox" id={props.id} defaultChecked={registered}
            
            onClick={
                function() {
                    
                    if (registered) { // When selecting a course, register or unregister given on current
                        // value of checkbox.
                        var data = {
                            user_id: props.id.toString(),
                            course_id: props.code.toString(),
                            headers: {
                                'Content-Type': 'application/json' // Denote we are sending JSON data.
                                }
                        }
                        registered=false;
                        post('https://ta-management-47.herokuapp.com/api/user/unregister', data);
                    }
                    else {

                        var data = {
                            user_id: props.id.toString(),
                            course_ids: JSON.stringify([props.code])
                        }
                        registered=true;
                        post('https://ta-management-47.herokuapp.com/api/user/register', data);   
                    }
                    
                }
                
            }
            ></input>  
        
            </div>
        </div>


        </li>
    )
}

export default TA;