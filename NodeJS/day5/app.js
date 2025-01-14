const { printOnScreen } = require("./file.js");
const fsPromises = require("fs/promises");

exports.getHTML = async () => {
    printOnScreen("inside getHTML");
    const data = await fsPromises.readFile("./pages/ass12.html", "utf8");
    printOnScreen("returning from getHTML");
    return data;
};

// fs.readFile("./pages/ass12.html", { encoding: "utf8" }, (err, data) => {
//     console.log("got data");
//     if (err) {
//         console.log(err);
//         res.end("File access error!");
//     } else {
//         res.end(data);
//     }
// });
