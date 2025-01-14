import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import { useState } from "react";
import AuthContext from "./context/authContext";

function App() {
    console.log("App re-rendered");
    const [data, setData] = useState({});
    const valueObj = {
        auth: data,
    };
    return (
        <AuthContext.Provider value={valueObj}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/login" element={<Login setData={setData} />}></Route>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
