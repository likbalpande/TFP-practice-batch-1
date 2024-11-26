// console.log("Start");

// const req = fetch("https://dummyjson.com");

// console.log("fetch request", req);

// req.then(() => {
//     console.log("success");
// }).catch(() => {
//     console.log("failed");
// });

// console.log("End");

// --------------------------------------------------

console.log("start");
const pr = new Promise(function myPromise(a, b) {
    console.log("Inside promise");

    setTimeout(() => {
        a();
    }, 10000);
});

console.log(pr);

pr.then(() => {
    console.log("success");
}).catch(() => {
    console.log("fail");
});
console.log("end");
