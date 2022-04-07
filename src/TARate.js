import LinkLogin from "./LinkLogin";
import {isUser } from "./Permissions";
import { CourseList } from "./CourseList";

function TARate() {
    return(
        <div>
        {isUser() ?
        <div>
            <h2>TA Ratings</h2> 
            {/* Display courses for this ID */}
            <CourseList url={`localhost:3000/api/courses/user?student_id=${localStorage.get("id")}`} rate={true} />
        </div>
        :
        <LinkLogin />
    }

        </div>
    )
}

export default TARate;