import styles from "./TA.module.css";

function TA(props) {
    return ( // Use student ID to get courses.
        <div>
            <h2>{props.fname} {props.lname}</h2>
            <h6>Add a review:</h6>
            <form>
            <textarea className={styles.userInput}>
            </textarea> <br />
            <button>Submit Review</button>
            </form>
        </div>
    )
}

export default TA;