import styles from "./TA.module.css";

function TA(props) {
    return ( // Use student ID to get courses.
    <li>
        <div>
            {props.fname} {props.lname} 
       
        <input type="checkbox" id="myCheck" defaultChecked={props.checked} onclick="myFunction()"></input>
        <button>Submit Changes</button>
        </div>
        </li>
    )
}

export default TA;