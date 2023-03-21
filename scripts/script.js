// Variables
const menuBtn = document.querySelector(".dropdown-btn");
const icon = document.querySelector(".dropdown-btn img");
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
        document.body.style.overflow= "unset";
    } else {
        icon.setAttribute("src", "assets/images/icon-menu-close.svg");
        darkLayer.style.display = "block";
        menu.style.display= "flex";
        document.body.style.overflow= "hidden";
    }
}