import "./App.css";
import DiningOut from "./pages/diningOut";
import { BrowserRouter, Routes, Route } from "react-router";
import Delivery from "./pages/delivery";
import ErrorPage from "./pages/errorPage";
import Home from "./pages/home";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dining-out" element={<DiningOut />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
