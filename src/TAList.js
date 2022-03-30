import React, { useState } from 'react';
import { useEffect } from 'react';

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
        get('https://ta-management-47.herokuapp.com/api/user/ta').then(response => console.log(response));
      }, []); 
      return (
          <div>Hello</div>
      )
}

export default TAList;