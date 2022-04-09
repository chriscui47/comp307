import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import User from "./User";

function EditUser() {
    async function get(url){
        let res = await fetch(url, {method: 'GET'});  
        if (res.status == 200) {
            let json = await res.json();
            return json;
        }
    }
    const [users, setAllUsers] = useState([]);
    useEffect(() => {
        get("https://ta-management-47.herokuapp.com/api/user").then(response => setAllUsers(response));     
    
    }, []); 


    return(
        <div>
            
                <ul>
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