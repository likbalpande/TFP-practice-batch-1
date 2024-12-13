import Navbar from "../components/common/navbar";
import Cards from "../components/searchPage/cards";
import { useEffect, useState } from "react";

const SearchPage = () => {
    console.log("--- ---> Search Page");

    const [m, r] = useState("Google");

    // useEffect(() => {
    //     console.log("SearchPage useEffect");
    // }, []);

    return (
        <div>
            <Navbar r={r} />
            <Cards text={m} />
        </div>
    );
};

export default SearchPage;
