import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/login/login";
import Search from "./pages/search/search";
import Home from "./pages/home/home";
import "./App.css";

const App = () => {
    const { isAuthorized } = useSelector((e) => e.auth);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={isAuthorized ? <Navigate to="/" /> : <Login />} />
                <Route path="/" element={isAuthorized ? <Home /> : <Navigate to="/login" />} />
                <Route path="/search" element={isAuthorized ? <Search /> : <Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
