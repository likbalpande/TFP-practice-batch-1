import { useEffect, useState } from "react";
import "./cards.css";

const Cards = ({ text = "" }) => {
    const [recipes, setRecipes] = useState(2);
    console.log("--- --- ---> Cards");

    function getData() {
        const pr1 = fetch(`https://dummyjson.com/recipes/search?q=${text}`);
        pr1.then((res) => {
            const pr2 = res.json();

            pr2.then((data) => {
                console.log(data);
                setRecipes(data.recipes);
            });
        });
    }

    // console.log("before use effect");

    useEffect(getData, [text]);

    // console.log("after use effect");

    return (
        <div className="cards-main-container">
            <div>
                <label>Cards Section</label>
                <p className="right">Your search Text: {text}</p>
                {recipes?.[0]?.name}
                {/* optional chaining */}
            </div>
        </div>
    );
};

export default Cards;
