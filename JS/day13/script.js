// console.log("Hello");

// const time1 = new Date();
// console.log("🟡 : time1:", time1);

// setTimeout(() => console.log("Instant", new Date()), 100);

// let sum = 0;

// for (let i = 0; i < 100000; i++) {
//     for (let j = 0; j < 10000; j++) {
//         sum += i + j;
//     }
// }
// console.log(sum);

// const time2 = new Date();
// console.log("🟡 : time2:", time2);

// console.log("END");

// --------------------------------------------------------------

// console.log("Hello");

// const time1 = new Date();
// console.log("🟡 : time1:", time1); // 10:39:40

// setTimeout(() => console.log("Instant", new Date()), 4000); // 10:39:46

// let sum = 0;

// for (let i = 0; i < 100000; i++) {
//     for (let j = 0; j < 10000; j++) {
//         sum += i + j;
//     }
// }
// console.log(sum);

// const time2 = new Date();
// console.log("🟡 : time2:", time2); // 10:39:45

// console.log("END");

// ----------------------------------------------------------------------

// console.log("Hello");

// const time1 = new Date();
// console.log("🟡 : time1:", time1); // 10:39:40

// setTimeout(() => console.log("Instant", new Date()), 10000); // 10:39:50

// let sum = 0;

// for (let i = 0; i < 100000; i++) {
//     for (let j = 0; j < 10000; j++) {
//         sum += i + j;
//     }
// }
// console.log(sum);

// const time2 = new Date();
// console.log("🟡 : time2:", time2); // 10:39:45

// console.log("END");

// --------------------------------------------------------------------------
//    _________________________________
//   |                                 |
//   |                                 |
// STACK <-- E.L --> Queues <------ Browser

// --------------------------------------------------------------------------

// const data = {
//     name: "jordan",
//     score: 101,
// };
// console.log("🟡 : data:", data);

// ----------------------------------------------------------------------------

// const data = [10, "!likhilesh!", "anurag", 21];

// const res1 = data.includes("anurag");
// console.log("🟡 : res1:", res1);
// const res2 = data.includes("likhilesh");
// console.log("🟡 : res2:", res2);
// const res3 = data.indexOf("anurag");
// console.log("🟡 : res3:", res3);
// const res4 = data.indexOf("likhilesh");
// console.log("🟡 : res4:", res4);
// const res5 = data.find((elem) => elem === "anurag");
// console.log("🟡 : res5:", res5);
// const res6 = data.find((elem) => elem === "likhilesh");
// console.log("🟡 : res6:", res6);

// -----------------------------------------------
const data = [
    {
        name: "likhilesh",
        city: "delhi",
    },
    {
        name: "anurag",
        city: "hissar",
    },
    {
        name: "saurav",
        city: "kolkata",
    },
    {
        name: "ayush",
        city: "delhi",
    },
];

const res = data.filter((elem) => {
    const city = elem.city;

    return city === "delhi";
});
console.log("🟡 : res:", res);

const res1 = data.filter(({ city }) => {
    return city === "delhi";
});
console.log("🟡 : res1:", res1);
