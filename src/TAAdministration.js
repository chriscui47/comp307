import {isUser, isTA, isAdmin, isSysOp, isProf} from "./Permissions.js";
import LinkLogin from "./LinkLogin.js";
import CourseListTA from "./CourseListTA.js";
import CourseList from "./CourseList.js";
function TAAdministration() {
    return(
        <div>
            {
                (isAdmin() || isSysOp()) ? 
                <div>
                    <CourseListTA url="https://ta-management-47.herokuapp.com/api/courses"/> 

                </div>
                : 
                <LinkLogin />
            }
           
        </div>
    )
}

export default TAAdministration;