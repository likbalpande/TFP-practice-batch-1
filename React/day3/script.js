import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/searchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./src/pages/signupPage";

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/register",
        element: <SignupPage />,
    },
    {
        path: "*",
        element: (
            <div>
                <h1>Oops!</h1>
                <a href="/">Home</a>
            </div>
        ),
    },
]);

const App = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

reactRoot.render(<App />);
