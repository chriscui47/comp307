import { useEffect } from 'react';
import { useState } from 'react';
import User from "./User";
import { get } from "./Helper";
// Component to edit user for sysop
function EditUser() { 

    const [users, setAllUsers] = useState([]);
    useEffect(() => {
        get("https://ta-management-47.herokuapp.com/api/user").then(response => setAllUsers(response));     
    
    }, []); 


    return(
        <div>
            
                <ul style={{listStyleType: "none"}}>
                    {
                users.map( // Mapping all users to user component
                    user =>       
                    <User required key={user.id} u={user}/>       
                )
                }
            
            </ul>
        </div>
    )
}

export default EditUser;