import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import styles from "./homePage.module.css";
import Card from "../../components/Card/card";

const Homepage = () => {
    console.log("line 1");
    const [data, setData] = useState({});
    async function getData() {
        const res = await fetch("https://dummyjson.com/posts");
        const obj = await res.json();
        setData(obj); // NOTED
        console.log(data);
    }

    // which is called "on component did mount"
    // useEffect(() => {
    //     console.log("cb called");
    //     getData();
    // });
    // // when dependency array is not present (everytime)

    useEffect(() => {
        console.log("cb called");
        getData();
    }, []);
    // when dependency array is empty: it will be called once
    // - only when the component is mounted first time

    console.log("line 10");
    return (
        <div className={styles.main_container}>
            <Navbar page="Home" />
            {/* optional chaining */}
            {data?.posts?.map((elem) => {
                // return Card({ elem: elem });
                return <Card key={elem.title} elem={elem} />;
            })}
        </div>
    );
};

export default Homepage;
