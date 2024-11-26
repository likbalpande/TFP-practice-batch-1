// const handleNameKeyDown = (e) => {
//     console.log(e);
//     console.log(e.target.value);
// };

// const handleIdKeyUp = (e) => {
//     console.log(e.target.value);
// };

const handleEmailChange = (e) => {
    // if (!e.target.validity.valid) {
    //     alert("invalid email");
    // }
    console.log(e.target.value);
    console.log(e);
};

// const handleFormSubmit = (e) => {
//     // e.stopPropagation();
//     e.preventDefault();
//     console.log(e);
//     let inp1Key = e.target[0].name;
//     let inp1Value = e.target[0].value;
//     let inp2Key = e.target[1].name;
//     let inp2Value = e.target[1].value;
//     let inp3Key = e.target[2].name;
//     let inp3Value = e.target[2].value;

//     let obj = {
//         [inp1Key]: inp1Value,
//         [inp2Key]: inp2Value,
//         [inp3Key]: inp3Value,
//     };

//     console.log(obj);
// };

// ------------------------------------

// BUBBLING CAPTURING

const parent = document.getElementById("parent");
const child = document.getElementById("child");

const handleParentClick = (e) => {
    console.log("PARENT");
    console.log(e);
};

const handleChildClick = (e) => {
    console.log("CHILD");
    console.log(e);
    // e.stopPropagation();
};

parent.addEventListener("click", handleParentClick, true);
parent.addEventListener("click", handleParentClick, false);

child.addEventListener("click", handleChildClick, false);

// --------------------------------------------------
// function sum(a, b) {
//     console.log("sum", a + b);
// }
// sum(10, 20);
// // ----------------------------------
// (function sum(a, b) {
//     console.log("sum", a + b);
// })(10, 20);
// IMMEDIATELY INVOKED FUNCTION (Expression)

// prevent-default, stop-propagation
