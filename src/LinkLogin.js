import { Link } from "react-router-dom";
// Component to redirect user to login page
function LinkLogin() {
    return( // Redirect user to login page
        <div>Please <Link to="/">Login</Link> before viewing this page.</div>
    )
}

export default LinkLogin;