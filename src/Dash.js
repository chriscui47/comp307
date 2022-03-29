import DashElement from "./DashElement";
import styles from "./Dash.module.css";

function Dash() {
    return(
        <div className={styles.screen}>
        <div className={styles.box}>
            <div className={styles.board}>
            <DashElement title="TA Management"/>
            <DashElement title="TA Adminstration"/>
            <DashElement title="Sysop Tasks"/>
            <DashElement title="Rate a TA"/>
            </div>
        </div>
        </div>
    );
}
export default Dash;