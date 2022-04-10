import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import User from "./User";
import { get } from "./Helper";

function EditUser() {

    const [users, setAllUsers] = useState([]);
    useEffect(() => {
        get("https://ta-management-47.herokuapp.com/api/user").then(response => {setAllUsers(response); console.log(response)});     
    
    }, []); 


    return(
        <div>
            
                <ul style={{listStyleType: "none"}}>
                    {
                users.map(
                    user =>
                    
                    <User required key={user.id} u={user}/>
                    
                )
                }
            
            </ul>
        </div>
    )
}

export default EditUser;