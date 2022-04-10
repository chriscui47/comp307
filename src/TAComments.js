import styles from './TAComments.module.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { isTA, isAdmin, isSysOp, isProf} from "./Permissions.js";
import { get } from "./Helper";
// Component to display a TA + feature to add a comment about a TA + ability to view all comments about this TA

function TAComments(props) {
    const [comments, setComments] = useState([]);
    const [textarea, setTextArea] = useState("");
    const rateRef = useRef();
    useEffect(() => {
        get(`https://ta-management-47.herokuapp.com/api/course/user/comment?course_id=${props.course_id}&user_id=${props.id}`).then(response => {setComments(response)} );
      }, []); 
    
      const handleChange = (event) => {
        setTextArea(event.target.value)
      }

      function handleSubmit(e) { // Handle submitting a form.
        e.preventDefault();
          if (textarea.length == 0) {
              return;
          }
        const commentData = {
            course_id: props.course_id.toString(),
            user_id: props.id.toString(),
            comment: textarea,
            isPerformance: props.rate ? false : true,
            rating: props.rate ? rateRef.current.value : 0
        };
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
            {(props.manage || isTA() || isProf() || isAdmin() || isSysOp()) && // Distinguish between TA performance log & ratings
            <div> 
                <u>Previous remarks</u> <br />
            {comments.filter(comment => props.manage ? comment.isPerformance : !comment.isPerformance).
            map(comment => <div className={styles.comment}>Comment: {comment.comment} <br/> 
            {!props.manage && <div> Rating: {comment.rating} 
                </div>}
             </div>)}
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