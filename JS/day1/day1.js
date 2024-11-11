// **************** doesn't work ****************
// function fun1() {
//     console.log(nm);
//     nm = "Hello";
//     console.log(nm);
// }
// fun1();
// console.log(nm);

// **************** but works ****************
// function fun1() {
//     nm = "Hello";
//     console.log(nm);
// }
// fun1();
// console.log(nm);
// console.log(j);

// var j = 10; // temporal dead zone
// temp();

// let temp = function nameOfFunc() {
//     console.log(j);
//     var i = 99;
//     console.log(i);
// };

// let temp = function () {
//     console.log(j);
//     var i = 99;
//     console.log(i);
// };

// let temp = () => {
//     console.log(j);
//     var i = 99;
//     console.log(i);
// };

// temp();

// console.log(j);

// let obj = {
//     username: "Likhilesh",
//     age: 20,
//     10: () => {},
// };

// // console.log(Object.keys(obj));
// // console.log(Object.values(obj));

// console.log(obj.username);
// console.log(obj[10]);

// let arr = {
//     0: "car",
//     1: "bike",
//     hello: "office",
// };
// console.log(arr);

// let arr2 = ["car", "bike", "office"];
// console.log(arr2);

// const obj = {
//     car: "bmw",
// };
// console.log(obj);

// // obj = "hello";

// // console.log(obj);

// obj.car = "mercedes";

// console.log(obj);

// let office = 1512;
// let org = "PPA";
// let details = {
//     floor: 15,
//     officeNumber: 12,
// };

// let username = "Anurag";
// let newName = username;

// newName = "Anurag !!";

// console.log(username);
// console.log(newName);

//-------------------------

// let details = {
//     office: "1512",
//     floor: 15,
// };

// let newDetails = details;
// newDetails.floor = 4;

// console.log(details);
// console.log(newDetails);

//-------------------------

// console.log(username);
// var username = "Ayush";
// console.log(username);

// function changeName() {
//     console.log(office);
//     username = "Kartik";
//     var office = 1512;
//     console.log(office);
// }

// username = "Anajali";
// console.log(username);
// changeName();
// console.log(username);

//-------------------------

// console.log(username);
// var username = "Ayush";
// console.log(username);

// console.log(changeName);

// var changeName = function func() {
//     console.log(office);
//     username = "Kartik";
//     var office = 1512;
//     console.log(office);
// };

// username = "Anajali";
// console.log(username);
// changeName();
// console.log(username);

// ----------------------------

// console.log(username);
// var username = "Ayush";
// console.log(username);

// console.log(changeName);

// changeName()

// var changeName = function func() {
//     console.log(office);
//     username = "Kartik";
//     var office = 1512;
//     console.log(office);
// };

// console.log(changeName);

// username = "Anajali";
// console.log(username);
// console.log(username);

// ----------------------------------

// const arr = ["A", "B"];

// arr[7] = "Z";

// console.log(arr);

// ------------------------
// let user = {
//     name: "Himanshu",
//     hashedPassword: "asdjbdsbvhbdfjdgb",
//     password: "pass123",
// };

// ---------------------------

// let user = {
//     name: "Himanshu",
//     hashedPassword: "asdjbdsbvhbdfjdgb",
//     password: "pass123",
// };

// const version = 1;

// console.log(user, version);

// function removeSecrets(obj, vr) {
//     // logic
//     delete obj.password;
//     vr++;
// }

// removeSecrets(user, version);

// console.log(user, version);

// -------------------------

// let arr = ["Himanshu", "Hemant", "Nikhil", "A", "B", "C", "D", "E", "F"];

// console.log(arr);

// function removeSecrets(a) {
//     // logic
//     delete a[1];
//     delete a[2];
//     delete a[3];
//     delete a[4];

//     // splice
// }

// removeSecrets(arr);

// console.log(arr);

// loops
//  for, while, do while
//  for in, for of

// const obj = {
//     name: "secret",
//     age: 3600,
//     1: "one",
// };

// for (let key in obj) {
//     console.log(key);
// }

// console.log("-----------");

// for (let value in obj) {
//     console.log(value);
// }

// console.log("-----------");

// // for (let value of obj) {
// //     console.log(value);
// // }

// console.log("-----------");

// const arr = ["secret", "one", "two", "three", "four", "five"];

// for (let value of arr) {
//     console.log(value);
// }

// for (let key in arr) {
//     console.log(key);
// }

console.log(window);
