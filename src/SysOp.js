import CourseList from "./CourseList";
import {isUser, isTA, isAdmin, isSysOp, isProf} from "./Permissions.js";
import LinkLogin from "./LinkLogin";
function SysOp() {


    return (
        <div>
            {isSysOp() ? <CourseList url="https://ta-management-47.herokuapp.com/api/courses"/>
            : <LinkLogin/>}
        </div>
    )
  
}

export default SysOp;