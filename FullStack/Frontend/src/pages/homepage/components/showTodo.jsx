import styles from "./showTodo.module.css";
import PropTypes from "prop-types";

const ShowTodo = ({ handleDelete, todoList, setSingleTodo, setIsEditing }) => {
    const handleEdit = (obj) => {
        setIsEditing(obj._id);
        const newObj = { ...obj };
        newObj.deadline = obj.deadline.split("T")[0];
        setSingleTodo(newObj);
    };
    return (
        <div className={styles.main_container}>
            {todoList.map((elem) => (
                <div key={elem._id} className={styles.todo_container}>
                    <button onClick={() => handleEdit(elem)}>Edit</button>
                    <button onClick={() => handleDelete(elem._id)}>Delete</button>
                    <div>
                        <label>title:{elem.title}</label>
                    </div>
                    <div>
                        <label>description:{elem.description}</label>
                    </div>
                    <div>
                        <label>deadline:{elem.deadline}</label>
                    </div>
                    <div>
                        <label>status:{elem.status}</label>
                    </div>
                    <div>
                        <label>priority:{elem.priority}</label>
                    </div>
                    <div>
                        <label>createdAt:{elem.createdAt}</label>
                    </div>
                    <div>
                        <label>updatedAt:{elem.updatedAt}</label>
                    </div>
                </div>
            ))}
        </div>
    );
};

ShowTodo.propTypes = {
    todoList: PropTypes.array.isRequired,
    setSingleTodo: PropTypes.func.isRequired,
    setIsEditing: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default ShowTodo;
