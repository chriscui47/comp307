import styles from './TAComments.module.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

// Component to display a TA + feature to add a comment about a TA + ability to view all comments about this TA
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
    const rateRef = useRef();
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
            isPerformance: props.rate ? true : false,
            rating: props.rate ? rateRef.current.value : 0
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
        }).then(() => window.location.reload(false)); // Reload after adding comment
    }

    return (
        <div> 
            <div className={styles.name}>{props.fname} {props.lname}</div>
            {props.manage && <div>
                
            {comments.map(comment => <div className={styles.comment}>{comment.comment}</div>)}
            <br />
            <br />
            </div>}
            <form onSubmit={handleSubmit}>
                <textarea className={styles.text} value={textarea} onChange={handleChange} /> < br />
                
                {props.rate && <div>Rating: (0/5) </div>}
                {props.rate && 
                    <select required id='rate' ref={rateRef}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    
                    </select>
                }
                <br /> <br />
                <button >Submit</button> 
            </form>
            
        </div>

    )
}

export default TAComments;