import "../styles/App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
    return (
        <div className="App">
            <Layout>
                {/*<Home />*/}
                {/*<Signup />*/}
                {/*<Login />*/}
                {/*<Quiz />*/}
                <Result />
            </Layout>
        </div>
    );
}

export default App;
