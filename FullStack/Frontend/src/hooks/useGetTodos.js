import { useState } from "react";

const useGetTodos = () => {
    const [todoList, setTodoList] = useState([]);

    console.log("re-rendered, useGetTodos", todoList);

    const getData = async () => {
        const res = await fetch("http://localhost:1902/api/v1/todo");
        const resObj = await res.json();
        setTodoList(resObj.data.todos);
    };

    return { todoList, getData };
};

export default useGetTodos;
