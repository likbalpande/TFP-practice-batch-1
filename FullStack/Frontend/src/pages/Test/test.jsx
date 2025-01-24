import { useState } from "react";

const Card = (props) => {
    console.log("child re-rendered");
    const { obj, setObj } = props; // e1a2
    const [child, setChild] = useState(1);

    return (
        <div style={{ padding: "2rem", backgroundColor: "lime" }}>
            <h1>Parent: {obj.text}</h1>
            <h1>Parent: {obj.city}</h1>
            <h1>Child: {child}</h1>
            <button
                onClick={() => {
                    setObj((prev) => {
                        return { ...prev, text: "hi" };
                    });
                }}
            >
                Parent ++
            </button>
            <button
                onClick={() => {
                    setChild((prev) => prev + 1);
                }}
            >
                Child ++
            </button>
        </div>
    );
};

const Parent = () => {
    console.log("-- Parent re-rendered");
    const [obj, setObj] = useState({ text: "hello", city: "Delhi" }); // e1a2
    return (
        <div style={{ padding: "2rem", backgroundColor: "yellow", margin: "2rem" }}>
            <Card obj={obj} setObj={setObj} />
            <button
                onClick={() => {
                    obj.city = "Jaipur";
                }}
            >
                Parent ++
            </button>
        </div>
    );
};

export default Parent;
