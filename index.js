const navToggle = document.getElementById("toggle");
const nav = document.getElementById("navigation");
const menuClose = document.getElementById("menu-close");
const menuOpen = document.getElementById("menu-open");
let visible = navToggle.getAttribute("data-visible") == "true";

navToggle.addEventListener("click", () => {
    visible = !visible;
    navToggle.setAttribute("data-visible", visible);

    nav.classList.toggle("translateShow");
    nav.classList.toggle("translateHide");

    menuClose.classList.toggle("show");
    menuOpen.classList.toggle("hide");
});
