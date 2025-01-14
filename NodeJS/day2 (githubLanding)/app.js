const PORT = process.env.PORT || 2400;
const http = require("http");

const server = http.createServer(async (req, res) => {
    const { url } = req;
    console.log("🟡 : url:", url);
    if (url === "/styles.css") {
        res.setHeader("Content-Type", "text/css");
        res.end(`
            *{padding: 0; margin: 0; box-sizing: border-box}
            body{padding: 2rem; background-color: yellow}
            h1{color: brown; text-transform:uppercase;}
        `);
    } else {
        try {
            const name = url.replace("/", "");
            const userStream = await fetch(`https://api.github.com/users/${name}`);
            const data = await userStream.json();

            const repoStream = await fetch(data.repos_url);
            const repos = await repoStream.json();

            res.setHeader("Content-Type", "text/html");
            res.end(`
            <!Doctype HTML>
            <html>
                <head>
                    <link rel="icon" type='image/x-icon' href='https://media.istockphoto.com/id/523761634/photo/cute-panda-bear-climbing-in-tree.jpg?s=612x612&w=0&k=20&c=TxsmORsbuY1LpxQsc6T8fpWJo7lBwncciYhroAr8rXI='>
                    <link rel="stylesheet" href="./styles.css"></link>
                </head>
                <body>
                    <h1>${data.login}</h1>
                    <h2>${data.bio}</h2>
                    <img src="${data.avatar_url}" />
                    <p>${repos[0].name}</p>
                </body>
            </html>
        `);
        } catch (err) {
            res.setHeader("Content-Type", "text/html");
            res.end(`
                <!Doctype HTML>
                <html>
                    <head>
                        <link rel="icon" type='image/x-icon' href='https://media.istockphoto.com/id/523761634/photo/cute-panda-bear-climbing-in-tree.jpg?s=612x612&w=0&k=20&c=TxsmORsbuY1LpxQsc6T8fpWJo7lBwncciYhroAr8rXI='>
                        <link rel="stylesheet" href="./styles.css"></link>
                    </head>
                    <body>
                        <h1>Oops... Something went wrong!</h1>
                    </body>
                </html>
            `);
        }
    }
});

server.listen(PORT, () => {
    console.log(`----------- SERVER STARTER on port : ${PORT} ------------`);
});
