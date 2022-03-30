import DashElement from "./DashElement";
import styles from "./Dash.module.css";
import {
    isUser, isTA, isAdmin, isSysOp, isProf
} from "./Permissions.js";
import LinkLogin from "./LinkLogin";
function canView(button) {

}


function Dash() {
    return(
        <div>
            {isUser() ? 
        <div className={styles.screen}>
        <div className={styles.box}>
            <div className={styles.board}>
            {(isTA() || isProf() || isAdmin() || isSysOp()) && <DashElement title="TA Management" url="/manage"/>}
            {(isAdmin() || isSysOp()) && <DashElement title="TA Administration" url="/admin"/>}
            {isSysOp() && <DashElement title="Sysop Tasks" url="/sysop"/>}
            {isUser() && <DashElement title="Rate a TA" url="/rate"/>}
            </div>
        </div>
        </div>
        : <LinkLogin/>}
        </div>
    );
}
export default Dash;