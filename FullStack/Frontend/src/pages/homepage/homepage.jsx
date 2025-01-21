import { Link } from "react-router";
import useGetTodos from "../../hooks/useGetTodos";
import AddTodo from "./components/addTodo";
import ShowTodo from "./components/showTodo";
import { useEffect, useState } from "react";

const Homepage = () => {
    const [singleTodo, setSingleTodo] = useState({
        title: "",
        description: "",
        deadline: "2025-01-14",
        priority: "",
    });

    const [isEditing, setIsEditing] = useState("");
    const { getData, todoList } = useGetTodos(); // custom hooks

    useEffect(() => {
        // lifecycle : on component did mount
        // lifecycle : on component / state did update (dependency)
        getData();

        // clean up function : before running on next useEffect
        // lifecycle: on component will un mount
        // as well as: before unmounting the component
        return () => {
            console.log("🔥 cleaning up the side effects");
        };
    }, []);

    const handleDelete = async (id) => {
        try {
            const resp = await fetch(`http://localhost:1902/api/v1/todo/${id}`, {
                method: "Delete",
            });
            if (resp.status === 204) {
                console.log("deleted");
                getData();
            } else {
                alert("something went wrong");
            }
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div>
            <Link to="/signup">Signup</Link>
            <AddTodo
                isEditing={isEditing}
                getData={getData}
                singleTodo={singleTodo}
                todoList={todoList}
                setSingleTodo={setSingleTodo}
                setIsEditing={setIsEditing}
            />
            <ShowTodo
                handleDelete={handleDelete}
                todoList={todoList}
                setSingleTodo={setSingleTodo}
                setIsEditing={setIsEditing}
            />
        </div>
    );
};

export default Homepage;
