// // 1. MEMORY Allocation.
// // 2. EXECUTION
// console.log("Start");

// function abc() {
//     console.log("inside abc");
// }
// console.log("mid");

// function temp() {
//     console.log("inside temp");
//     abc();
// }

// temp();

// console.log("end");

// // CALL STACK

// --------------------------------------------------------

// callback: function passed as an argument
// HOF (higher order function): A function which accepts a callback OR returns a function

// -----------------------------------------------------------

// function convertA(from, to, balance) {
//     // BINANCE
//     if (from == "USD") {
//         if (to == "INR") {
//             return balance * 87.5; // API...
//         }
//     } else if (from == "INR") {
//         if (to == "USD") {
//             return balance / 86; // API...
//         }
//     }
//     return "Error in conversion!";
// }

// function convertB(from, to, balance) {
//     // BINANCE
//     if (from == "USD") {
//         if (to == "INR") {
//             return balance * 86; // API...
//         }
//     } else if (from == "INR") {
//         if (to == "USD") {
//             return balance / 86; // API...
//         }
//     }
//     return "Error in conversion!";
// }

// // HOF
// const walletBalance = (balance, cb) => {
//     const rupees = cb("USD", "INR", balance);
//     const message = "You INR balance is <u>&#8377;" + rupees + "</u>  ($" + balance + ")";
//     return message;
// };

// function displayBalanceFromA() {
//     const msg = walletBalance(100, convertA); // callback: convertB
//     document.querySelector("h1").innerHTML = msg;
// }

// function displayBalanceFromB() {
//     const msg = walletBalance(100, convertB); // callback: convertB
//     document.querySelector("h1").innerHTML = msg;
// }

// -------------------------------------------------------
