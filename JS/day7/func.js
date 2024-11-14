// const arr = [10, 5, 13, 14, 7, 9];

// SUMMATION

// for loop
// let sum = 0;
// for (let elem of arr) {
//     sum += elem;
// }
// console.log(sum);

// forEach
// let sum = 0;
// arr.forEach((elem) => {
//     sum += elem;
// });
// console.log(sum);

// map
// let sum = 0;
// arr.map((elem) => {
//     sum += elem;
// });
// console.log(sum);

// reduce
// let sum = 0;
// let initialValue = 0;

// arr.reduce((acc, elem, idx, arr) => {
//     console.log(acc, elem, idx, arr);
//     sum += elem;
// }, initialValue);

// console.log(sum);

// Accha Reduce with initial value
// let initialValue = 0;

// const sum = arr.reduce((acc, elem) => {
//     console.log(acc, elem);
//     // op
//     const res = acc + elem;
//     // return its value
//     return res;
// }, initialValue);

// console.log(sum);

// Accha Reduce W/O initial value
// const arr = [4, 6, 3];
// const sum = arr.reduce((acc, elem, idx) => {
//     console.log(acc, elem, idx);
//     // op
//     const res = acc * elem;
//     // return its value
//     return res;
// });

// console.log(sum); // IT STARTS WITH 2nd element and take the first element as acc initial value

// // -------------------------------- // FUNCTION - ee1------------------------------
// const arr = [4, 6, 3];
// const sum = arr.reduce((acc, elem, idx) => {
//     return acc + elem;
// });
// console.log(sum);

// ---------------------------- ARROW FUNCTION DEFAULT RETURN (exactly same as FUNC - ee1) ----------------------------------
// const arr = [4, 6, 3];
// const sum = arr.reduce((acc, elem) => acc + elem); // when you do not apply curly braces --> it automatically return the expression
// console.log(sum);

// ---------------------------- REDUCE TO DO MORE STUFF  - 1 ----------------------------------
// const arr = ["", 4, 6, 3];
// const sum = arr.reduce((acc, elem, idx) => {
//     return acc + elem;
// });
// console.log(sum);

// ---------------------------- REDUCE TO DO MORE STUFF  - 2 ----------------------------------
// const arr = [4, 6, 3, 4];
// const sum = arr.reduce((obj, elem, idx) => {
//     obj[idx] = elem;
//     return obj;
// }, {});
// console.log(sum);

// const arr = [4, 6, 3, 10, 4];
// const sum = arr.reduce((obj, elem, idx) => {
//     if (elem in obj) {
//         console.log("Already present", elem, obj[elem]);
//     } else {
//         obj[elem] = idx;
//     }
//     return obj;
// }, {});
// console.log(sum);

// ---------------------------------------

// const obj = {
//     username: "Ajay",
// };

// const newValue = "Aakash";

// console.log(obj);

// obj.username = newValue;

// console.log(obj);

// ---------------------------------
// const obj = {};
// const newValue = "Aakash";
// obj.username = newValue;
// console.log(obj);

// -----------------------------------

// const obj = {};
// const key = prompt("Please provide a key");
// const value = prompt("Please provide a value");

// // obj.key = value;
// obj[key] = value;
// console.log(obj);

// ----------------------------- NOT PRIORITY -----------------------------

// const input1 = [3, 30]; // --> [30, 30];
// const output1 = 330;
// const input2 = [3, 32]; // --> [30, 32];
// const output2 = 332;
// const input3 = [2, 34]; // --> [20, 34];
// const output3 = 342;

// const input = [3, 30, 34, 5, 9]; // --> [30, 30, 34, 50, 90] --> [90, 50, 34, 30, 30]; --> [9,5,34,3,30]
