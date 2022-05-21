import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            setError("");
            // setLoading(true);
            await login(email, password);
            history.push("/");
        } catch (err) {
            // setLoading(false);
            setError(err.message);
        }
    };

    return (
        <>
            <h1>Login to your account</h1>

            <div className="column">
                <Illustration />
                <Form className={`${classes.login}`} onSubmit={handleLogin}>
                    <TextInput
                        type="email"
                        placeholder="Enter email"
                        icon="alternate_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextInput
                        type="password"
                        placeholder="Enter password"
                        icon="lock"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit">
                        <span>Submit Now</span>
                    </Button>

                    {error && <p className="error">{error}</p>}

                    <div className="info">
                        Don't have an account? <Link to="signup">Signup</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}
