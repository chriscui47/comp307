import { Link } from "react-router-dom";

function LinkLogin(props) {
    return(
        <div>Please <Link to="/">Login</Link> before viewing this page.</div>
    )
}

export default LinkLogin;