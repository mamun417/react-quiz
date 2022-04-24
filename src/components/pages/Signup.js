import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState("");

    const { signup } = useAuth();
    const history = useHistory();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Password miss match!");
            return false;
        }

        try {
            // setLoading(true);
            await signup(email, password, name);
            history.push("/");
        } catch (err) {
            // setLoading(false);
            setError(err.message);
        }
    };

    return (
        <>
            <h1>Create an account</h1>

            <div className="column">
                <Illustration />
                <Form className={`${classes.signup}`} onSubmit={handleSignup}>
                    <TextInput
                        type="text"
                        placeholder="Enter name"
                        icon="person"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <TextInput
                        type="email"
                        placeholder="Enter email"
                        icon="alternate_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextInput
                        type="password"
                        placeholder="Enter password"
                        icon="lock"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <TextInput
                        type="password"
                        placeholder="Confirm password"
                        icon="lock_clock"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <Checkbox
                        text="I agree to the Terms &amp; Conditions"
                        value={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        required
                    />
                    <Button type="submit">
                        <span>Submit Now</span>
                    </Button>{" "}
                    {error && <p className="error">{error}</p>}
                    <div className="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}
