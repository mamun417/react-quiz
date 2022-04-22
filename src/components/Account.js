import classes from "../styles/Account.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Account() {
    const { currentUser } = useAuth();

    return (
        <div className={classes.account}>
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            <Link to="/signup">Signup</Link>
            <span>{currentUser && currentUser.displayName}</span>
            <span className="material-icons-outlined" title="Logout">
                {" "}
                logout{" "}
            </span>
        </div>
    );
}
