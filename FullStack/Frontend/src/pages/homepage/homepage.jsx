import AddTodo from "./components/addTodo";
import ShowTodo from "./components/showTodo";
import { useEffect, useState } from "react";

const Homepage = () => {
    const [todoList, setTodoList] = useState([]);
    const [singleTodo, setSingleTodo] = useState({
        title: "",
        description: "",
        deadline: "2025-01-14",
        priority: "",
    });
    const [isEditing, setIsEditing] = useState("");
    const getData = async () => {
        const res = await fetch("http://localhost:1902/api/v1/todo");
        const resObj = await res.json();
        setTodoList(resObj.data.todos);
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <AddTodo
                isEditing={isEditing}
                getData={getData}
                singleTodo={singleTodo}
                setSingleTodo={setSingleTodo}
                setIsEditing={setIsEditing}
            />
            <ShowTodo todoList={todoList} setSingleTodo={setSingleTodo} setIsEditing={setIsEditing} />
        </div>
    );
};

export default Homepage;
