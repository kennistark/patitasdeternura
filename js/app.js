// const menu = document.querySelector(".menu-toggle")
// const menuBtn = document.querySelector(".navbar-toggle")
// const menu = document.querySelector(".menu-toggle")

// menuBtn.onclick = () => {
//     menu.classList.add(".menu-toggle")
// }

const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('collapse');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});