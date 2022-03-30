import {isUser, isTA, isAdmin, isSysOp, isProf} from "./Permissions.js";
import LinkLogin from "./LinkLogin.js";
function TAManagement() {
    return(
        <div>
            {
                (isTA() || isProf() || isAdmin() || isSysOp()) ? <div>TA Management</div>
                : 
                <LinkLogin />
            }
           
        </div>
    )
}

export default TAManagement;