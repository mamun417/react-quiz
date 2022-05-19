import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Switch>
                        <PrivateRoute exact path="/" component={Home} />
                        <PublicRoute exact path="/signup" component={Signup} />
                        <PublicRoute exact path="/login" component={Login} />
                        <PrivateRoute exact path="/quiz/:id" component={Quiz} />
                        <PrivateRoute exact path="/result/:id" component={Result} />
                    </Switch>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;
