import LinkLogin from "./LinkLogin";
import {isUser, isTA, isAdmin, isProf, isSysOp } from "./Permissions";
import CourseList from "./CourseList";

function TARate() {
    return(
        <div>
        {isUser() ?
        <div>
            <h2>TA Ratings</h2> 
            {/* Display courses for this ID */}
            { (!isTA() && !isAdmin() && !isProf() && !isSysOp()) &&
                <CourseList url={`https://ta-management-47.herokuapp.com/api/courses/user?student_id=${localStorage.getItem("id")}`} rate={true} rateIfTrueLogIfFalse={true} />
            }
            
        </div>
        :
        <LinkLogin />
    }

        </div>
    )
}

export default TARate;