// promise chaining
// ((then, catch).(try,catch)) finally

async function getData() {
    console.log("hello");
    return "done";
    // try {
    //     const res = await fetch("https://apii.github.com/users/likbalpande");
    //     console.log("Received: ✅");
    //     const data = await res.json();
    //     console.log("Got Data !");
    //     return data.bio;
    // } catch (err) {
    //     console.log("❌");
    //     console.log(err);
    // }
}

console.log("start");
const res = getData();
console.log(res);
console.log("end");

// const cbS = (res) => {
//     console.log("✅");
//     const pr2 = res.json();
//     pr2.then((data) => {
//         console.log(data);
//     });
// };
// const cbE = (res) => {
//     console.log("❌");
//     console.log(res);
// };
// function getData1() {
//     const pr = fetch("https://api.github.com/users/likbalpande");
//     pr.then(cbS);
//     pr.catch(cbE);
// };

// getData1();
