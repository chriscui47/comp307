import DashElement from "./DashElement";

function Dash() {
    return(
        <div className="screen">
            <div className="board">
            <DashElement title="TA Management"/>
            <DashElement title="TA Adminstration"/>
            <DashElement title="Sysop Tasks"/>
            <DashElement title="Rate a TA"/>
            </div>
        </div>
    );
}
export default Dash;