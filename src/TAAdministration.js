import {isUser, isTA, isAdmin, isSysOp, isProf} from "./Permissions.js";
import LinkLogin from "./LinkLogin.js";
import CourseList from "./CourseList.js";
function TAAdministration() {
    return(
        <div>
            {
                (isAdmin() || isSysOp()) ? 
                <div>
                    <div style={{textAlign: "center", width: "100%"}}>
                    <h1>TA Administration</h1>
                    </div>
                    <CourseList url="https://ta-management-47.herokuapp.com/api/courses" edit={true}/> 

                    <br />
                    <br />
                </div>
                : 
                <LinkLogin />
            }
           
        </div>
    )
}

export default TAAdministration;