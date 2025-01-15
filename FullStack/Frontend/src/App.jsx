import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/homepage/homepage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signup" element={<div>hello</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
