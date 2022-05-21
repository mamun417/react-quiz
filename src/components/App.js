import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
                    <Routes>
                        <Route path="/" element={<PrivateRoute component={Home} />} />
                        <Route path="/signup" element={<PublicRoute component={Signup} />} />
                        <Route path="/login" element={<PublicRoute component={Login} />} />
                        <Route path="/quiz/:id" element={<PrivateRoute component={Quiz} />} />
                        <Route path="/result/:id" element={<PrivateRoute component={Result} />} />
                    </Routes>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;
