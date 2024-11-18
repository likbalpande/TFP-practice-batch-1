// const btn = document.getElementById("btn");
// const main = document.getElementById("root");

// const handleClick = () => {
//     mainDisplay = getComputedStyle(main).display;
//     console.log("🟡 : mainDisplay:", mainDisplay);
//     wrongDisplayProperty = main.style.display;
//     console.log("🛑 : wrongDisplayProperty:", wrongDisplayProperty);
//     if (mainDisplay == "none") {
//         console.log("Main is hidden");
//         main.style.display = "block";
//     } else {
//         console.log("Main is visible");
//         main.style.display = "none";
//     }
// };

// btn.addEventListener("click", handleClick);

// -------------------------

// const data = [
//     {
//         name: "Ajay",
//         city: "Jaipur",
//     },
//     {
//         name: "Pravin",
//         city: "Delhi",
//     },
//     {
//         name: "Aakash",
//         city: "Manipur",
//     },
//     {
//         name: "Hemanth",
//         city: "Hyderabad askjdbsajhdvbhjfvbjhdbfshjvbsbhjbdfhjvbdkjbvfhknbvaiunidfunjhfvbjhdfbhjbv",
//     },
//     {
//         name: "Sumedh",
//         city: "Mumbai",
//     },
//     {
//         name: "Varun",
//         city: "Kanpur",
//     },
//     {
//         name: "Ajay",
//         city: "Jaipur",
//     },
//     {
//         name: "Pravin",
//         city: "Delhi",
//     },
//     {
//         name: "Aakash",
//         city: "Manipur",
//     },
//     {
//         name: "Hemanth",
//         city: "Hyderabad",
//     },
//     {
//         name: "Sumedh",
//         city: "Mumbai",
//     },
//     {
//         name: "Varun",
//         city: "Kanpur",
//     },
//     {
//         name: "Ajay",
//         city: "Jaipur",
//     },
//     {
//         name: "Pravin",
//         city: "Delhi",
//     },
//     {
//         name: "Aakash",
//         city: "Manipur",
//     },
//     {
//         name: "Hemanth",
//         city: "Hyderabad",
//     },
//     {
//         name: "Sumedh",
//         city: "Mumbai",
//     },
//     {
//         name: "Varun",
//         city: "Kanpur",
//     },
//     {
//         name: "Ajay",
//         city: "Jaipur",
//     },
//     {
//         name: "Pravin",
//         city: "Delhi",
//     },
//     {
//         name: "Aakash",
//         city: "Manipur",
//     },
//     {
//         name: "Hemanth",
//         city: "Hyderabad",
//     },
//     {
//         name: "Sumedh",
//         city: "Mumbai",
//     },
//     {
//         name: "Varun",
//         city: "Kanpur",
//     },
// ];
// const main = document.getElementById("root");
// const container = document.createElement("div");
// container.className = "parent";

// data.forEach(({ name, city }) => {
//     const card1 = document.createElement("div");
//     card1.className = "card";
//     card1.innerHTML = `
//         <p>Name: <b>${name}</b></p>
//         <p title="${city}">City: <b>${city}</b></p>
//     `;
//     container.appendChild(card1);
// });

// main.appendChild(container);

// -----------------------------

const data = [
    {
        name: "Ajay",
        city: "Jaipur",
    },
    {
        name: "Pravin",
        city: "Delhi",
    },
    {
        name: "Aakash",
        city: "Manipur",
    },
    {
        name: "Hemanth",
        city: "Hyderabad askjdbsajhdvbhjfvbjhdbfshjvbsbhjbdfhjvbdkjbvfhknbvaiunidfunjhfvbjhdfbhjbv",
    },
    {
        name: "Sumedh",
        city: "Mumbai",
    },
    {
        name: "Varun",
        city: "Kanpur",
    },
    {
        name: "Ajay",
        city: "Jaipur",
    },
    {
        name: "Pravin",
        city: "Delhi",
    },
    {
        name: "Aakash",
        city: "Manipur",
    },
    {
        name: "Hemanth",
        city: "Hyderabad",
    },
    {
        name: "Sumedh",
        city: "Mumbai",
    },
    {
        name: "Varun",
        city: "Kanpur",
    },
    {
        name: "Ajay",
        city: "Jaipur",
    },
    {
        name: "Pravin",
        city: "Delhi",
    },
    {
        name: "Aakash",
        city: "Manipur",
    },
    {
        name: "Hemanth",
        city: "Hyderabad",
    },
    {
        name: "Sumedh",
        city: "Mumbai",
    },
    {
        name: "Varun",
        city: "Kanpur",
    },
    {
        name: "Ajay",
        city: "Jaipur",
    },
    {
        name: "Pravin",
        city: "Delhi",
    },
    {
        name: "Aakash",
        city: "Manipur",
    },
    {
        name: "Hemanth",
        city: "Hyderabad",
    },
    {
        name: "Sumedh",
        city: "Mumbai",
    },
    {
        name: "Varun",
        city: "Kanpur",
    },
];
const main = document.getElementById("root");
const container = new DocumentFragment();

data.forEach(({ name, city }) => {
    const card1 = document.createElement("div");
    card1.className = "card";
    card1.innerHTML = `
        <p>Name: <b>${name}</b></p>
        <p title="${city}">City: <b>${city}</b></p>
    `;
    container.appendChild(card1);
});

main.appendChild(container);
