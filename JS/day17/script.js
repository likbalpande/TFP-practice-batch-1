const showResults = (arr) => {
    const parent = document.getElementById("results");
    parent.innerHTML = "";

    arr.forEach(({ formatted }) => {
        const newPara = document.createElement("p");
        newPara.innerText = formatted;
        parent.append(newPara);
    });
};

const showCards = (arr) => {
    const parent = document.getElementById("cards");
    parent.innerHTML = ``;

    arr.forEach(({ username, city }) => {
        const newDiv = document.createElement("div");
        newDiv.className = "card";
        newDiv.innerHTML = `
            <p>Name: ${username}</p>
            <p>City: ${city}</p>
        `;
        parent.append(newDiv);
    });
};

const getData = (searchText) => {
    const API_KEY = "";
    const pr = window.fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${searchText}&type=city&limit=10&format=json&filter=countrycode:in&apiKey=${API_KEY}`
    );
    pr.then((res) => {
        console.log(res);
        const pr2 = res.json();
        pr2.then((data) => {
            showResults(data.results);
        });
    }).catch((err) => {
        console.log(err);
    });
};

let timeoutId;

const getDataDebounced = (searchText) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        getData(searchText);
    }, 600);
};

const handleSearch = (e) => {
    const searchText = e.target.value;
    // getData(searchText);
    if (searchText.length >= 3) {
        getDataDebounced(searchText);
    }
};

const handleName = (e) => {};

// const data = [];
const cardInfo = localStorage.getItem("cards-info");
const data = cardInfo ? JSON.parse(cardInfo) : []; // ternary operator (if else)
showCards(data);

const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const city = e.target[1].value;
    data.push({ username, city });

    localStorage.setItem("cards-info", JSON.stringify(data));

    showCards(data);
};
