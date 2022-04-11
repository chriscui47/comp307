import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { get } from "./Helper";

function DeleteUser() {

    const userRef = useRef();

    // Post request & await data => return json
    async function del(url, data){
    let res = await fetch(url, {method: 'DELETE', body: JSON.stringify(data), 
    headers: {
      'Content-Type': 'application/json' // Denote we are sending JSON data.
    }});  
    if (res.status == 200) {
        let json = await res.json();
        return json;
    }
  }


  function submitHandler(e) { // On submit, delete user
      e.preventDefault();
      const data= {
          id: userRef.current.value
      }
      del('https://ta-management-47.herokuapp.com/api/user/delete', data).then(resp => window.location.reload(false));
  }

    const [allUsers, setAllUsers] = useState([]); // Get all users
    useEffect(() => {
        get("https://ta-management-47.herokuapp.com/api/user").then(response => setAllUsers(response));     
    }, []); 

    return (
        <div>

            <h6>Select a user to delete.</h6>
            <form  onSubmit={submitHandler}>
             <select required id = 'user' ref = {userRef}>
          {allUsers
          .map(user => 
            <option required key = {user.id} value={user.id}>
              {user.first_name} {user.last_name}
            </option>
            )}
        </select>
        <br />
        <button>Delete User</button>
        </form>
        </div>
    )

}

export default DeleteUser;