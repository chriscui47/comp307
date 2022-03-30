import {isUser, isTA, isAdmin, isSysOp, isProf} from "./Permissions.js";
import LinkLogin from "./LinkLogin.js";
function TAAdministration() {
    return(
        <div>
            {
                (isAdmin() || isSysOp()) ? <div>TA Admin</div>
                : 
                <LinkLogin />
            }
           
        </div>
    )
}

export default TAAdministration;