// require(), module.exports : CommonJS - cjs (default support)
// javascript (not is strict mode)
// require (synchronous way) (no option for async)

// import, export : ModuleJS - mjs (newer)
// javascript (strict mode)
// import (synchronous way) (option for async)

// const data = require("./dataCJS.js");
// console.log("🟡 : data:", data);
// const fsPromises = require("fs/promises");
// // import data from "./dataMJS.js";
// // import fsPromises from "fs/promises";

// const getProductsNames = () => {
//     const { products } = data;
//     const titles = products.map(({ title }) => {
//         return title;
//     });
//     fsPromises.writeFile("titles.json", JSON.stringify(titles), { encoding: "utf8" });
// };

// console.log(getProductsNames());

const { username, userCity } = require("./dataCJS.js");
console.log(username);
console.log(userCity);
