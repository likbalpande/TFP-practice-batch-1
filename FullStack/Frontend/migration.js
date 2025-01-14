const tasks = [
    "Read",
    "Write",
    "Code",
    "Paint",
    "Draw",
    "Plan",
    "Think",
    "Study",
    "Learn",
    "Teach",
    "Build",
    "Fix",
    "Test",
    "Debug",
    "Design",
    "Create",
    "Watch",
    "Listen",
    "Review",
    "Update",
    "Deploy",
    "Manage",
    "Edit",
    "Sketch",
    "Write",
    "Search",
    "Optimize",
    "Arrange",
    "Organize",
    "Model",
    "Craft",
    "Measure",
    "Analyze",
    "Track",
    "Focus",
    "Review",
    "Refactor",
    "Record",
    "Collaborate",
    "Present",
    "Print",
    "Submit",
    "Compose",
    "Compile",
    "Schedule",
    "Implement",
    "Translate",
    "Compare",
    "Research",
    "Evaluate",
];

function getRandomIndex() {
    return Math.floor(Math.random() * (tasks.length + 1)); // 51 ensures the range includes 0 to 50
}

const addData = async (idx) => {
    const data = {
        title: tasks[getRandomIndex()] + " " + tasks[getRandomIndex()],
        description: tasks[getRandomIndex()] + " " + tasks[getRandomIndex()] + " " + tasks[getRandomIndex()],
    };
    try {
        const resp = await fetch(`http://localhost:1902/api/v1/todo`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
            },
        });
        if (resp.status === 201) {
            console.log(idx, "done ✅", data);
        } else {
            const data = await resp.json();
            console.log("❌ Not done", data.message);
        }
    } catch (err) {
        alert("Something went wrong!", err.message);
    }
};

for (let i = 0; i < 50; i++) {
    await addData(i);
}
