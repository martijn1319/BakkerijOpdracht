var screenWidth = window.innerWidth;
var menuIcon = document.getElementById('menu-icon');
var mobileNav = document.querySelector('.mobile-nav');
var closeMenu = document.getElementById('close-menu');
closeMenu.addEventListener("click", () => {
    mobileNav.style.display = "none";
});
if (screenWidth < 800) {
  menuIcon.addEventListener("click", () => {
    mobileNav.style.display = "block";
  });
}