// Variables
const menuBtn = document.querySelector(".navigation-bar .menu");
const icon = document.querySelector(".navigation-bar .menu .icon");
const darkLayer = document.querySelector(".darker-layer");
const menu = document.querySelector(".options");

//Event listeners
menuBtn.addEventListener("click", dropMenu);

//Functions
function dropMenu() {
    if(icon.getAttribute("src").includes("close")) {
        icon.setAttribute("src", "assets/images/icon-menu.svg");
        darkLayer.style.display = "none";
        menu.style.display= "none";
    } else {
        icon.setAttribute("src", "assets/images/icon-menu-close.svg");
        darkLayer.style.display = "block";
        menu.style.display= "flex";
    }
}