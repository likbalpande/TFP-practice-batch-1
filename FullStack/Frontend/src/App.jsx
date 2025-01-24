import { Navigate, Route, Routes } from "react-router";
import Homepage from "./pages/homepage/homepage";
import Signup from "./pages/homepage/signup";
import { Link } from "react-router";
import Login from "./pages/homepage/login";
import { useState } from "react";
import useGetIsAuthorized from "./hooks/useGetIsAuthorized";
import Test from "./pages/Test/test";

const App = () => {
    const [userInfo, setUserInfo] = useState({ isAuthenticated: false, user: {} });
    useGetIsAuthorized({ setUserInfo });
    const manageLogin = ({ name, email }) => {
        setUserInfo({
            isAuthenticated: true,
            name: name,
            email: email,
        });
    };

    const { isAuthenticated } = userInfo;
    return (
        <Routes>
            {/* SECURES ROUTES */}
            <Route path="/" element={isAuthenticated ? <Homepage userInfo={userInfo} /> : <Navigate to="/login" />} />
            <Route path="/test" element={<Test />} />
            <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup userInfo={userInfo} />} />
            <Route
                path="/login"
                element={
                    isAuthenticated ? <Navigate to="/" /> : <Login userInfo={userInfo} manageLogin={manageLogin} />
                }
            />
            <Route
                path="*"
                element={
                    <div>
                        NOT FOUND <Link to="/">Home</Link>
                    </div>
                }
            />
        </Routes>
    );
};

export default App;
