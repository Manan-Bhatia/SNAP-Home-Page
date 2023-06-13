// navbar menu
const navToggle = document.getElementById("toggle");
const nav = document.getElementById("navigation");
const menuClose = document.getElementById("menu-close");
const menuOpen = document.getElementById("menu-open");
const backdrop = document.getElementById("backdrop");

let visible = navToggle.getAttribute("data-visible") == "true";

navToggle.addEventListener("click", () => {
    visible = !visible;
    navToggle.setAttribute("data-visible", visible);

    nav.classList.toggle("translateShow");
    nav.classList.toggle("translateHide");

    backdrop.classList.toggle("hide");

    menuClose.classList.toggle("show");
    menuOpen.classList.toggle("hide");
});

// Sub list
const featureSubListToggle = document.getElementById("f-sub-list-toggle");
const companySubListToggle = document.getElementById('c-sub-list-toggle')

const featureSubList = document.getElementById("f-sub-list");
const companySubList = document.getElementById("c-sub-list");

const arrow = document.querySelectorAll('.sub-list-toggle')


featureSubListToggle.addEventListener('click', () => {
    featureSubList.classList.toggle('hide')
    arrow[0].childNodes[1].classList.toggle('show')
    arrow[0].childNodes[3].classList.toggle('hide')
})

companySubListToggle.addEventListener('click', () => {
    companySubList.classList.toggle('hide')
    arrow[1].childNodes[1].classList.toggle('show')
    arrow[1].childNodes[3].classList.toggle('hide')
})
