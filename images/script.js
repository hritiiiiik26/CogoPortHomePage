let togleMenu = 0;
function toggleMenu() {
  let navbar_mobile = document.getElementById("navbar-mobile");
  togleMenu = !togleMenu;
  if (togleMenu) {
    navbar_mobile.style.display = "block";
  } else {
    navbar_mobile.style.display = "none";
  }
  console.log(window.innerWidth);
}
