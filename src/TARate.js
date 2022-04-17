import LinkLogin from "./LinkLogin";
import {isUser, isTA, isAdmin, isProf, isSysOp } from "./Permissions";
import CourseList from "./CourseList";
// TA Rating feature component
function TARate() {
    return(
        <div>
        {isUser() ?
        <div>
        <div style={{textAlign: "center", width: "100%"}}>
            <h2>TA Ratings</h2> 
            </div>
            {/* Display courses for this ID conditionally, depending on user*/}

            {
            (isAdmin() || isSysOp()) &&  // Admin and sysop look at all rates
                <CourseList url={"https://ta-management-47.herokuapp.com/api/courses"} rate={true} rateIfTrueLogIfFalse={true} />
            }

            {
                (isProf() && !isAdmin() && !isSysOp()) && // professors only look at their rates
                <CourseList url={`https://ta-management-47.herokuapp.com/api/courses/professor?id=${localStorage.getItem("DBID")}`} trueIfRateFalseIfLog={false} rate={true} /> 
            }
            {
                (!isProf() && !isAdmin() && !isSysOp()) && // other users only look at their courses
                <CourseList url={`https://ta-management-47.herokuapp.com/api/courses/user/?id=${localStorage.getItem("DBID")}`} rate={true} rateIfTrueLogIfFalse={true} />
            }
            
            
        </div>
        :
        <LinkLogin />
    }

        </div>
    )
}

export default TARate;