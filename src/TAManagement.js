import {isUser, isTA, isAdmin, isSysOp, isProf} from "./Permissions.js";
import LinkLogin from "./LinkLogin.js";
function TAManagement() {
    return(
        <div>
            {
                (isTA() || isProf() || isAdmin() || isSysOp()) ? 
                
                <div>

                    


                </div>
                // Get all courses by professor. => On select a course, show dropdown
                // Of performance log. Each course should have associated performance log.
                : <LinkLogin />
            }
           
        </div>
    )
}

export default TAManagement;