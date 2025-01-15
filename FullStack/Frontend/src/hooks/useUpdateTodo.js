const useUpdateTodo = (getData) => {
    console.log("re-rendered, useUpdateTodo");
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

    return { addNewTodo };
};

export default useUpdateTodo;
