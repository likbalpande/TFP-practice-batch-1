import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/homepage/homepage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
