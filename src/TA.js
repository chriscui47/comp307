import styles from "./TA.module.css";
import { post } from "./Helper";
import { useRef } from 'react';

// Class for TA + feature of removing/adding a TA from a course




function TA(props) {

    async function post(url, data)  
    {       
        let res = await fetch(url, {method: 'POST', body: JSON.stringify(data), 
        headers: {
        'Content-Type': 'application/json' // Denote we are sending JSON data.
        }});  
       
  }


    var registered = props.checked;
    const hoursRef = useRef();
    function unRegisterHandler(e) {
        e.preventDefault();
        var data = {
            user_id: props.id.toString(),
            course_id: props.code.toString(),
            
        }
        post('https://ta-management-47.herokuapp.com/api/user/unregister', data).then(resp => window.location.reload(false));
    }

    function registerHandler(e) {
        e.preventDefault();
        var data = {
            user_id: props.id.toString(),
            course_ids: JSON.stringify([props.code]),
            isStudent: "false",
            hours: hoursRef.current.value
        }
        post('https://ta-management-47.herokuapp.com/api/user/register', data).then(resp => window.location.reload(false));   

    }


    return ( // Use student ID to get courses.
    <li className={styles.screen}>
            <div className={styles.parent} >
                {props.checked &&
                <div className={styles.name}>
                     {props.fname} {props.lname} ({props.hours} hours)
                </div>
                
                }
                {!props.checked && 
                     <div className={styles.name}>
                     {props.fname} {props.lname}
                     </div> 
                }
           
            <div className={styles.box}>
            {props.checked && 
            
            <form onSubmit={unRegisterHandler}>
                <button>Unregister</button>
            </form>
            }

            {!props.checked &&
            <form onSubmit={registerHandler}>
                <input type="number" id='hours' ref={hoursRef} style={{width: "50px"}}></input> 
                <button>Register</button>
            </form>
            }


            { /** 
            <input type="checkbox" id={props.id} defaultChecked={registered}
            
            
            onClick={
                function() {
                    
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
                            hours: 0
                        }
                        registered=true;
                        post('https://ta-management-47.herokuapp.com/api/user/register', data);   
                    }
                    
                }
                
            }
            ></input>  

        */}
            </div>
        
        </div>


        </li>
    )
}

export default TA;