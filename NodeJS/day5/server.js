"use strict";
const http = require("http");
const { getHTML } = require("./app");
const { printOnScreen } = require("./file");

const PORT = process.env.PORT || 1807;

const server = http.createServer(async (req, res) => {
    if (req.url != "/favicon.icon") {
        res.write("<div style='padding: 2rem; background: yellow; color: brown;'><h1>Loading</h1></div>");
        try {
            const html = await getHTML();
            setTimeout(() => res.end(html), 10000);
        } catch (err) {
            res.end("Error occurred!");
        }
    } else res.end("");
});

server.listen(PORT, () => {
    printOnScreen("Server started on Port:", PORT);
});
