//NAVBAR SETTINGS
window.onscroll = function() {stickyNav()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function stickyNav() {
  navbar.style.transition= "150ms ease";
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
//Hide options on small screen
var navi = document.getElementById("navi");
function hideDrop() {
  if (navi.className === "rc_nav") {
      navi.classList.add("responsive");
  } else {
      navi.classList.remove("responsive");
  }
}
//Dim screen
//var dropdown = document.getElementsByClassName('dropdown');
//var dim = document.getElementsByClassName('dim');

//FORGOT LOGIN
function recoverLogin() {

}
