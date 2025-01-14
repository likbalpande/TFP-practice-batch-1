import PropTypes from "prop-types";
import { useState } from "react";

const AddTodo = ({ getData, isEditing, setIsEditing, singleTodo, setSingleTodo }) => {
    console.log("🟡 : singleTodo:", singleTodo);
    const isEditingForm = isEditing.length !== 0;

    const addNewTodo = async (e) => {
        const data = {
            title: e.target[0].value,
            description: e.target[1].value,
            deadline: e.target[2].value,
            priority: e.target[3].value || undefined,
        };
        try {
            const resp = await fetch(`http://localhost:1902/api/v1/todo`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "content-type": "application/json",
                },
            });
            getData();
            console.log(resp);
            if (resp.status === 201) {
                // alert("Done");
            } else {
                alert("Not done", resp.status);
            }
        } catch (err) {
            alert("Something went wrong!", err.message);
        }
    };

    const editTodo = async (e) => {
        const data = {
            title: e.target[0].value,
            description: e.target[1].value,
            deadline: e.target[2].value,
            priority: e.target[3].value || undefined,
        };
        try {
            const resp = await fetch(`http://localhost:1902/api/v1/todo/${isEditing}`, {
                method: "PUT", // data replace
                body: JSON.stringify(data),
                headers: {
                    "content-type": "application/json",
                },
            });
            getData();
            console.log(resp);
            if (resp.status === 200) {
                // alert("Done");
            } else {
                alert("Not done", resp.status);
            }
        } catch (err) {
            alert("Something went wrong!", err.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isEditingForm) {
            // edit todo in backend
            editTodo(e);
        } else {
            // add new todo in backend
            addNewTodo(e);
        }
    };

    const handleReset = () => {
        setIsEditing("");
        setSingleTodo({
            title: "",
            description: "",
            deadline: "2025-01-14",
            priority: "",
        });
    };

    const [count, setCount] = useState(0);

    return (
        <div>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <div>
                    <label>Title:</label>
                    <input
                        name="title"
                        value={singleTodo.title}
                        onChange={(e) => {
                            setSingleTodo((prev) => {
                                const newObj = { ...prev };
                                newObj.title = e.target.value;
                                return newObj;
                            });
                        }}
                        disabled={isEditingForm}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={singleTodo.description}
                        onChange={(e) => {
                            setSingleTodo((prev) => {
                                const newObj = { ...prev };
                                newObj.description = e.target.value;
                                return newObj;
                            });
                        }}
                    />
                </div>
                <div>
                    <label>Deadline:</label>
                    <input
                        type="date"
                        name="deadline"
                        value={singleTodo.deadline}
                        onChange={(e) => {
                            setSingleTodo((prev) => {
                                const newObj = { ...prev };
                                newObj.deadline = e.target.value;
                                return newObj;
                            });
                        }}
                    />
                </div>
                <div>
                    <label>Priority:</label>
                    <input
                        type="text"
                        name="priority"
                        value={singleTodo.priority}
                        onChange={(e) => {
                            setSingleTodo((prev) => {
                                const newObj = { ...prev };
                                newObj.priority = e.target.value;
                                return newObj;
                            });
                        }}
                    />
                </div>
                <div>{isEditing.length !== 0 ? <button>Update</button> : <button>Add</button>}</div>
                <button type="reset">Clear</button>
            </form>
        </div>
    );
};

AddTodo.propTypes = {
    getData: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired,
    setIsEditing: PropTypes.func.isRequired,
    setSingleTodo: PropTypes.func.isRequired,
    singleTodo: PropTypes.object.isRequired,
};

export default AddTodo;
