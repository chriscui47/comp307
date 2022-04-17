// TAAdministration page

import {isUser, isTA, isAdmin, isSysOp, isProf} from "./Permissions.js";
import LinkLogin from "./LinkLogin.js";
import CourseList from "./CourseList.js";
function TAAdministration() {
    return(
        <div>
            {
                (isAdmin() || isSysOp()) ?  // Check permission, if valid, show courses w/ edit feature
                <div>
                    <div style={{textAlign: "center", width: "100%"}}>
                    <h1>TA Administration</h1>
                    </div>
                    <CourseList url="https://ta-management-47.herokuapp.com/api/courses" edit={true}/> 

                    <br />
                    <br />
                </div>
                :  // if permissions not proper, redirect to login page.
                <LinkLogin />
            }
           
        </div>
    )
}

export default TAAdministration;