import React, { useState } from 'react';

async function get(){
    let res = await fetch("https://ta-management-47.herokuapp.com/api/courses/user/?student_id=1", {method: 'GET'});  
    if (res.status == 200) {
        let json = await res.json();
        console.log(json);
        return json;
    }
}


function UserCourses() {
    const [data, setData] = useState([]);
    get().then(response => setData(response));
    
    return(
    <div>Hello</div>
    );

}

export default UserCourses;