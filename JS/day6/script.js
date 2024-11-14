let isMenuOpen = false;
const menuIcon = document.getElementById("menu-icon");
const menuContainer = document.getElementById("menu-container");

// const handleMenuIconClick = (e) => {
//     if (!isMenuOpen) {
//         menuContainer.style.display = "block";
//     } else {
//         menuContainer.style.display = "none";
//     }
//     isMenuOpen = !isMenuOpen;
// };

// menuIcon.addEventListener("click", handleMenuIconClick);

document.body.addEventListener("click", (e) => {
    // in all the cases - close the menu container
    if (e.target.className !== "menu-anchor") {
        if (isMenuOpen) {
            menuContainer.style.display = "none";
            isMenuOpen = false;
        } else if (e.target === menuIcon) {
            if (!isMenuOpen) {
                menuContainer.style.display = "block";
                isMenuOpen = true;
            }
        }
    }
});
