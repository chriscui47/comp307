import {isUser, isTA, isAdmin, isSysOp, isProf} from "./Permissions.js";
import LinkLogin from "./LinkLogin.js";
import TAList from "./TAList";
import styles from "./TARate.module.css";
import CourseList from "./CourseList";
function TARate() {
    return(
        <div>
            {
                isUser() ? 
                <div className={styles.screen}>
                    {// Get courselist by student ID for rate. 
                    }
                <CourseList url={`/api/courses/user/?student_id=${localStorage.getItem("id")}`}/>
                </div>
                : 
                <LinkLogin />
            }
           
        </div>
    )
}

export default TARate;