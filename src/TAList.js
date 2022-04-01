import React, { useState } from 'react';
import { useEffect } from 'react';
import  TA  from "./TA";

// Function to async return courses from database.
async function get(url){
    let res = await fetch(url, {method: 'GET'});  
    if (res.status == 200) {
        let json = await res.json();
        return json;
    }
}

function TAList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        get('https://ta-management-47.herokuapp.com/api/user').then(response => setData(response));
      }, []); 
      return (
          <div>
              {data.map(ta => <TA required key={ta.student_id} fname={ta.first_name} lname={ta.last_name} id={ta.student_id}/>)}
          </div>
      )
}

export default TAList;