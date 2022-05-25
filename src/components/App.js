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
import store from "../store";
import updatePersonAction from "../store/actions/updatePersonAction";
import updateGameAction from "../store/actions/updateGameAction";

function App() {
    function updatePersonName() {
        store.dispatch(updatePersonAction.updateName);
    }

    function updateGameName() {
        store.dispatch(updateGameAction.updateName);
    }

    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <div>
                        <div>Check Redux</div> <button onClick={updatePersonName}>update person name</button>
                        <div>Person name: {store.getState().person.name}</div>
                        <br />
                        <br />
                        <div>Check Redux</div> <button onClick={updateGameName}>update game name</button>
                        <div>Game name: {store.getState().game.name}</div>
                    </div>
                    {/*<Routes>*/}
                    {/*    <Route element={<PublicRoute />}>*/}
                    {/*        <Route path="/login" element={<Login />} />*/}
                    {/*        <Route path="/signup" element={<Signup />} />*/}
                    {/*    </Route>*/}
                    {/*    <Route element={<PrivateRoute />}>*/}
                    {/*        <Route path="/" element={<Home />} />*/}
                    {/*        <Route path="/quiz/:id" element={<Quiz />} />*/}
                    {/*        <Route path="/result/:id" element={<Result />} />*/}
                    {/*    </Route>*/}
                    {/*</Routes>*/}
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;
