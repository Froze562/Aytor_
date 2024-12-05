let nav_btn = document.querySelector(".nav-btn");
let sideMenu = document.querySelector(".nav-menu");

nav_btn.onclick = function () {
     nav_btn.classList.toggle("active")
     sideMenu.classList.toggle("active")
};
document.onclick = function (e) {
     if (!nav_btn.contains(e.target) && !sideMenu.contains(e.target)) {
          nav_btn.classList.remove("active")
          sideMenu.classList.remove("active")
     }
};