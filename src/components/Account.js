import classes from "../styles/Account.module.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Account() {
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    const handleLogout = async () => {
        try {
            await logout();
            history.push("login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={classes.account}>
            {currentUser ? (
                <>
                    <span className="material-icons-outlined" title="Account">
                        account_circle
                    </span>
                    <span>{currentUser.displayName}</span>
                    <span className="material-icons-outlined" title="Logout" onClick={handleLogout}>
                        {" "}
                        logout{" "}
                    </span>
                </>
            ) : (
                <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
}
