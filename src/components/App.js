import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import Layout from "./Layout/Layout";
import { AuthProvider } from "../context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import LearnRedux from "./pages/redux/LearnRedux";
import classes from "../styles/Nav.module.css";
import LearnReduxSynchronus from "./pages/redux/LearnReduxSynchronus";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Routes>
                        <Route element={<PublicRoute />}>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/learn-redux" element={<LearnRedux />} />
                            <Route path="/learn-redux-synchronous" element={<LearnReduxSynchronus />} />
                        </Route>
                        <Route element={<PrivateRoute />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/quiz/:id" element={<Quiz />} />
                            <Route path="/result/:id" element={<Result />} />
                        </Route>
                    </Routes>
                    <Link to="/learn-redux" className={classes.brand}>
                        <h3>Learn Redux</h3>
                    </Link>
                    <Link to="/learn-redux-synchronous" className={classes.brand}>
                        <h3>Learn Redux Synchronous</h3>
                    </Link>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;
