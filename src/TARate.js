import {isUser, isTA, isAdmin, isSysOp, isProf} from "./Permissions.js";
import LinkLogin from "./LinkLogin.js";
import TAList from "./TAList";
import styles from "./TARate.module.css"
function TARate() {
    return(
        <div>
            {
                isUser() ? 
                <div className={styles.screen}>
                <TAList/>
                </div>
                : 
                <LinkLogin />
            }
           
        </div>
    )
}

export default TARate;