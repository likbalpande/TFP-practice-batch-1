import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/homepage/homepage";
import Signup from "./pages/homepage/signup";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
