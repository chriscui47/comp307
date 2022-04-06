import {isUser, isTA, isAdmin, isSysOp, isProf} from "./Permissions.js";
import CourseList from "./CourseList.js";
import LinkLogin from "./LinkLogin.js";
import CourseListTA from "./CourseListTA.js";
function TAManagement() {
    return(
        <div>
            {
                (isProf() || isAdmin() || isSysOp()) ? 
                
                    
                    isSysOp() ? (<div>
                        <div style={{textAlign: "center", width: "100%"}}>
                        <h1>TA Management</h1>
                        </div>
                    <CourseList url="https://ta-management-47.herokuapp.com/api/courses" log={true}/> 
                    
    
                    </div>)

                    :
                    // Specific to professor.
                    <div>
                    <div style={{textAlign: "center", width: "100%"}}>
                        <h1>TA Management</h1>
                        </div>
                    
                    <CourseList url={`https://ta-management-47.herokuapp.com/api/courses/professor?id=${localStorage.getItem("DBID")}`} log={true}/> 
    
    
                    </div>

                    
                
                // Get all courses by professor. => On select a course, show dropdown
                // Of performance log. Each course should have associated performance log.
                : <LinkLogin />
            }
           
        </div>
    )
}

export default TAManagement;