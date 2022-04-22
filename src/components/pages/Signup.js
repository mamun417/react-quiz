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
    const { signup } = useAuth();
    const history = useHistory();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            // setError("");
            // setLoading(true);
            await signup(email, password, name);
            history.push("/");
        } catch (err) {
            console.log(err);
            // setLoading(false);
            // setError("Failed to create an account!");
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
                    />

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

                    <TextInput
                        type="password"
                        placeholder="Confirm password"
                        icon="lock_clock"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <Checkbox
                        text="I agree to the Terms &amp; Conditions"
                        value={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                    />

                    <Button type="submit">
                        <span>Submit Now</span>
                    </Button>

                    <div className="info">
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}
