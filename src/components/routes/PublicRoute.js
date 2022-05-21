import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PublicRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();

    return !currentUser ? <Component {...rest} /> : <Navigate to="/login" />;
}
