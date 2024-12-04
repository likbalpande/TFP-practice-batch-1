import React from "react";
import ReactDOM from "react-dom/client";

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

console.log("hello likhilesh");

const newReactElementJSX = (
    <ul>
        <li className="text" title="hello">
            Likhilesh
        </li>
        <li className="text" title="hello">
            Anurag
        </li>
    </ul>
);

reactRoot.render(newReactElementJSX);
