// code ..........
const obj = {
    username: "Ajay",
    percentage: "", // avg of all subjects w.r.t. 100
    remark: "", // Pass or fail
    testResults: [
        {
            subject: "Maths",
            score: "", // total score
            maxScore: "", // total max score
            questions: [
                {
                    name: "Q1",
                    score: 4,
                    maxScore: 5,
                },
                {
                    name: "Q2",
                    score: 5,
                    maxScore: 5,
                },
                {
                    name: "Q3",
                    score: 5,
                    maxScore: 5,
                },
                {
                    name: "Q4",
                    score: 5,
                    maxScore: 5,
                },
                {
                    name: "Q5",
                    score: 0,
                    maxScore: 5,
                },
            ],
        },
        {
            subject: "English",
            score: "",
            maxScore: "",
            questions: [
                {
                    name: "Q1",
                    score: 3,
                    maxScore: 5,
                },
                {
                    name: "Q2",
                    score: 1,
                    maxScore: 5,
                },
                {
                    name: "Q3",
                    score: 3,
                    maxScore: 5,
                },
                {
                    name: "Q4",
                    score: 4,
                    maxScore: 5,
                },
                {
                    name: "Q5",
                    score: 2,
                    maxScore: 5,
                },
            ],
        },
        {
            subject: "Science",
            score: "",
            maxScore: "",
            questions: [
                {
                    name: "Q1",
                    score: 9,
                    maxScore: 10,
                },
                {
                    name: "Q2",
                    score: 2,
                    maxScore: 5,
                },
                {
                    name: "Q3",
                    score: 6,
                    maxScore: 10,
                },
                {
                    name: "Q4",
                    score: 4,
                    maxScore: 5,
                },
                {
                    name: "Q5",
                    score: 2,
                    maxScore: 10,
                },
            ],
        },
        {
            subject: "PT",
            remark: "Pass",
        },
    ],
};

// code ..........
// we want final object

// obj.testResults[0].questions.forEach((elem) => {
//     console.log(elem);
// });

// for (let i = 0; i < obj.testResults.length; i++) {
//     // i -> 0 -- 2
//     for (let j = 0; j < obj.testResults[i].questions.length; j++) {
//         // j -> depends on questions length
//         console.log(obj.testResults[i].questions[j]);
//     }
// }

// // -----------------------------------
// let finalScore = 0;
// let finalMaxScore = 0;

// obj.testResults.forEach((entry) => {
//     let totalScore = 0;
//     let totalMaxScore = 0;

//     entry.questions.forEach(({ score, maxScore }) => {
//         totalScore += score;
//         totalMaxScore += maxScore;
//     });

//     entry.score = totalScore;
//     entry.maxScore = totalMaxScore;
//     finalScore += totalScore;
//     finalMaxScore += totalMaxScore;
// });

// obj.percentage = (finalScore * 100) / finalMaxScore;
// obj.remark = obj.percentage > 35 ? "Pass" : "Fail";

// console.log(obj);

// // --------------------------------------------------------

// -------------------- by reference
// let arr = ["Himanshu", "Hemant", "Nikhil", "A", "B", "C", "D", "E", "F"];
// console.log(arr);
// function func(a) {
//     a[0] = "Likhilesh";
// }
// func(arr);
// console.log(arr);

// -------------------- by value
// let username = "Likhilesh";
// function func2(txt) {
//     txt = "Ajay";
// }
// func2(username);
// console.log(username);

// destructuring

// -----------------------------------------
// // object destructuring: name / key matters
// const { testResults, college = "ABCD" } = obj; // default value by giving "="
// console.log("🟡 : college:", college);

// // array destructuring: position matters
// const [, Subject2, Subject3, Subject4] = testResults;

// const { questions: ques2 } = Subject2; // rename by giving "colon"
// const { questions: ques3 } = Subject3;
// const { questions: ques4 } = Subject4;

// // console.log("🟡 : questions:", questions);
// console.log("🟡 : questions:", ques2);

// -------------------------------------------
// REST - SPREAD (...)

// const { testResults, percentage, ...rem } = obj; // REST
// console.log(testResults);
// console.log(rem);

// const arr1 = ["fruits", "vegetables"];
// const arr2 = ["drinks", "water"];
// const res = [arr1, arr2];
// const mergedArray = [...arr1, ...arr2]; // SPREAD
// console.log("🟡 : mergedArray:", mergedArray);
// console.log("🟡 : res:", res);

// const [, item2, ...others] = mergedArray;
// console.log("🟡 : item2:", item2);
// console.log("🟡 : others:", others);

// -------------------------------------------
// const sum = (a, b) => {
//     console.log(a + b);
// };

// sum();
// sum(10);
// sum(10, 20);
// sum(10, 20, 50);
// -------------------------------------------
// const sum = (a = 0, b = 0) => {
//     console.log(a + b);
// };

// sum();
// sum(10);
// sum(10, 20);
// sum(10, 20, 50);

// ----------------------------------------

// const sum = (...rest) => {
//     const ans = rest.reduce((acc, elem) => acc + elem, 0);
//     console.log(ans);
// };

// sum(10, 20, 30, 44, 99, 45);

// --------------------------------------------

// ------------------ REDIRECT USING IDs
// const handleHTML = () => {
//     window.location = "#html";
// };
// const handleHTML3 = () => {
//     window.location = "#html3";
// };
// const handleCSS = () => {
//     window.location = "#css";
// };
// const handleJS = () => {
//     window.location = "#js";
// };
// const handleReact = () => {
//     window.location = "#react";
// };

// -------------------- SCROLL using scrollIntoView
const htmlSection = document.getElementById("html");
const html3Section = document.getElementById("html3");
const cssSection = document.getElementById("css");
const jsSection = document.getElementById("js");
const reactSection = document.getElementById("react");

const options = {
    behavior: "smooth",
    block: "center",
};

const handleHTML = () => {
    htmlSection.scrollIntoView(options);
};
const handleHTML3 = () => {
    html3Section.scrollIntoView(options);
};
const handleCSS = () => {
    cssSection.scrollIntoView(options);
};
const handleJS = () => {
    jsSection.scrollIntoView(options);
};
const handleReact = () => {
    reactSection.scrollIntoView(options);
};

// ------------------ LOCAL STORAGE ------------

const setBackgroundColor = (clr) => {
    document.body.style.backgroundColor = clr;
};

const setColor = () => {
    const clr = document.getElementById("color").value;
    localStorage.setItem("my-color", clr);
    setBackgroundColor(clr);
};

const defaultValue = localStorage.getItem("my-color");
setBackgroundColor(defaultValue);

// -------------------- PAGINATION
