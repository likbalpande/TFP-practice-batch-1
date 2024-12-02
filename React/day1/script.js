// const domRoot = document.getElementById("parent");

// const newDOMElement = document.createElement("ul");
// console.log("🟡 : newDOMElement:", newDOMElement);
// const newReactElement = React.createElement("ul", {}, "Likhilesh");
// console.log("🟡 : newReactElement:", newReactElement);

// reactRoot = ReactDOM.createRoot(domRoot);
// reactRoot.render(newReactElement);

// -------------------------------------------------

// const domRoot = document.getElementById("parent");
// reactRoot = ReactDOM.createRoot(domRoot);

// const newReactElement = {
//     $$typeof: Symbol.for("react.element"),
//     type: "ul",
//     key: null,
//     ref: null,
//     props: {
//         children: "Likhilesh",
//         className: "text",
//         title: "hello",
//     },
// };

// reactRoot.render(newReactElement);

// --------------------------------------------------
// const domRoot = document.getElementById("parent");
// reactRoot = ReactDOM.createRoot(domRoot);

// const newReactElement1 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "li",
//     key: null,
//     ref: null,
//     props: {
//         children: "Likhilesh",
//         className: "text",
//         title: "hello",
//     },
// };

// const newReactElement2 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "li",
//     key: null,
//     ref: null,
//     props: {
//         children: "Himanshu",
//         className: "text",
//         title: "hello",
//     },
// };

// const newReactElementP = {
//     $$typeof: Symbol.for("react.element"),
//     type: "ul",
//     key: null,
//     ref: null,
//     props: {
//         children: [newReactElement1, newReactElement2],
//     },
// };

// reactRoot.render(newReactElementP);

// ----------------------------------------------

const domRoot = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(domRoot);

// const newReactElementP = {
//     $$typeof: Symbol.for("react.element"),
//     type: "ul",
//     key: null,
//     ref: null,
//     props: {
//         children: [
//             {
//                 $$typeof: Symbol.for("react.element"),
//                 type: "li",
//                 key: null,
//                 ref: null,
//                 props: {
//                     children: "Likhilesh",
//                     className: "text",
//                     title: "hello",
//                 },
//             },
//             {
//                 $$typeof: Symbol.for("react.element"),
//                 type: "li",
//                 key: null,
//                 ref: null,
//                 props: {
//                     children: "Himanshu",
//                     className: "text",
//                     title: "hello",
//                 },
//             },
//         ],
//     },
// };

const newReactElementJSX = (
    <ul>
        <li className="text" title="hello">
            Likhilesh
        </li>
        <li className="text" title="hello">
            Himanshu
        </li>
    </ul>
);

reactRoot.render(newReactElementJSX);
