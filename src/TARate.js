import {isUser, isTA, isAdmin, isSysOp, isProf} from "./Permissions.js";
import LinkLogin from "./LinkLogin.js";
function TARate() {
    return(
        <div>
            {
                isUser() ? <div>TA Rate</div>
                : 
                <LinkLogin />
            }
           
        </div>
    )
}

export default TARate;