import styles from './TAComments.module.css';
import TA from './TA.js';
import React, { useState } from 'react';
import { useEffect } from 'react';

async function get(url){
    let res = await fetch(url, {method: 'GET'});  
    if (res.status == 200) {
        let json = await res.json();
        return json;
    }
}


function TAComments(props) {
    const [comments, setComments] = useState([]);
    const [textarea, setTextArea] = useState("");
    useEffect(() => {
        get(`https://ta-management-47.herokuapp.com/api/course/user/comment?course_id=${props.course_id}&user_id=${props.id}`).then(response => {setComments(response); console.log(response)} );
      }, []); 
    
      const handleChange = (event) => {
        setTextArea(event.target.value)
      }

      function handleSubmit(e) {
        e.preventDefault();
          if (textarea.length == 0) {
              return;
          }
        const commentData = {
            course_id: props.course_id.toString(),
            user_id: props.id.toString(),
            comment: textarea,
            isPerformance: true,
            rating: '0'
        };
        console.log(commentData);
        console.log(JSON.stringify(commentData));
        fetch("https://ta-management-47.herokuapp.com/api/comment/create", {
            // Configure
             method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
            'Content-Type': 'application/json' // Denote we are sending JSON data.
            }
        }).then(resp => console.log(resp)); // Reload here instead
    }

    return (
        <div> 
            {props.manage && <div>
                <div className={styles.name}>{props.fname} {props.lname}</div>
            {comments.map(comment => <div className={styles.comment}>{comment.comment}</div>)}
            <br />
            <br />
            </div>}
            <form onSubmit={handleSubmit}>
                <textarea className={styles.text} value={textarea} onChange={handleChange} /> < br />
                <button >Add Comment for {props.fname}</button>
            </form>
            
        </div>

    )
}

export default TAComments;