import CourseList from "./CourseList";
import {isUser, isTA, isAdmin, isSysOp, isProf} from "./Permissions.js";
import LinkLogin from "./LinkLogin";
function SysOp() {


    return (
        <div>
            {isSysOp() ? <div><h2>All Courses</h2> 
            <CourseList url="https://ta-management-47.herokuapp.com/api/courses"/> </div>
            : <LinkLogin/>}
        </div>
    )
  
}

export default SysOp;