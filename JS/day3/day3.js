// let a = 10;

// console.log(a);

// function func() {
//     con.log(b);
// }

// func();

// const inp = prompt();
// console.log("Number -->", Number(inp));
// console.log("parseInt -->", parseFloat(inp));

// Number()
// parseInt()

// ---------------------------------------------

const elem = document.getElementById("container-1");
console.log("🟡 : elem:", elem);
console.dir(elem);

elem.innerHTML = `<h2 class="">Hi, <b>Good Morning</b></h2>`; //  jo karna hai karo
// elem.className = "greetings"; // it replaces the class names
elem.classList.add("greetings"); // it adds class to the class names list
