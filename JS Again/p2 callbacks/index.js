// const arr = [10, 22, "hello", 1];

// declarations
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// declarations
// for (let i in arr) {
//     console.log(arr[i]);
// }

// declarations
// for (let i of arr) {
//     console.log(i);
// }

// // forEach
// const cb = (idx, elem, arr) => {
//     console.log(idx, elem, arr);
// };

// const ans = arr.forEach(cb);
// console.log(ans);

// map
// const cb = (idx, elem, arr) => {
//     console.log(idx, elem, arr);
//     return idx + 1;
// };

// const ans = arr.map(cb);
// console.log(ans);

// // MAP
// const arr = [22, 33, 44, 97];

// const cb = (elem) => {
//     return elem % 10;
// };

// const ans = arr.map(cb);
// console.log(ans);

// // MAP
// const arr = [22, 33, 44, 97];

// const cb = (elem) => elem % 10; // Implicit RETURN (shorthand syntax)

// const ans = arr.map(cb);
// console.log(ans);

// function cb(elem) {
//     return elem % 10;
// }

// CB directly
// const arr = [22, 33, 44, 97];

// const ans = arr.map((elem) => elem % 10);
// console.log(ans);

const arr = [22, 2, 44, 5, 33, 97];

const ans = arr.sort((a, b) => a - b);
console.log(ans);

// REDUCE, SPLICE
