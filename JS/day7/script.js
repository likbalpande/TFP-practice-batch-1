const menuIcon = document.getElementById("menu-icon");
const menuContainer = document.getElementById("menu-container");

window.addEventListener("click", (e) => {
    console.log(menuContainer.style.display);
    console.log(getComputedStyle(menuContainer).display);
    if (e.target === menuIcon) {
        menuContainer.style.display = "flex";
    } else {
        menuContainer.style.display = "none";
    }
});
