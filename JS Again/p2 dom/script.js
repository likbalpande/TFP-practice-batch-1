const data = [
    {
        id: 3,
        quote: "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
        author: "Abdul Kalam",
    },
    {
        id: 4,
        quote: "If You Can'T Make It Good, At Least Make It Look Good.",
        author: "Bill Gates",
    },
    {
        id: 5,
        quote: "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
        author: "Rumi",
    },
    {
        id: 6,
        quote: "It is bad for a young man to sin; but it is worse for an old man to sin.",
        author: "Abu Bakr (R.A)",
    },
    {
        id: 7,
        quote: "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.",
        author: "Albert Einstein",
    },
    {
        id: 8,
        quote: "O man you are busy working for the world, and the world is busy trying to turn you out.",
        author: "Abu Bakr (R.A)",
    },
    {
        id: 9,
        quote: "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.",
        author: "Abdul Kalam",
    },
    {
        id: 10,
        quote: "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.",
        author: "Abraham Lincoln",
    },
    {
        id: 11,
        quote: "I Don'T Believe In Failure. It Is Not Failure If You Enjoyed The Process.",
        author: "Oprah Winfrey",
    },
    {
        id: 12,
        quote: "Do not get elated at any victory, for all such victory is subject to the will of God.",
        author: "Abu Bakr (R.A)",
    },
];
console.log(data);
const parent = document.getElementById("cards");

for (let i = 0; i < 10; i++) {
    // adding an element in dom
    const newPara = document.createElement("p");
    newPara.innerText = data[i].quote + " - " + data[i].author;
    parent.append(newPara);

    // extension: adding a button to remove the node from dom
    const newButton = document.createElement("button");
    newButton.innerText = "Delete";
    parent.append(newButton);
    newButton.addEventListener("click", (e) => {
        parent.removeChild(newPara);
        parent.removeChild(newButton);
    });
}
