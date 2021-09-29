//NAVBAR SETTINGS
window.onscroll = function() {stickyNav()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function stickyNav() {
  navbar.style.transition= "350ms ease";
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//Hide options on small screen
function hideDrop() {
  var navi = document.getElementById("navi")
  navbar.style.transition= "350ms ease";
  if (navi.className === "rc_nav") {
      navbar.classList.add("responsive");
  } else {
      navi.classList.remove("responsive");
  }
}

//Dim screen
var dim = document.getElementsByClassName("dim");
navi.onmouseover = function() { dim.style.display = "block"; }
navi.onmouseout = function() { dim.style.display = "none";  }
//FORGOT LOGIN
function recoverLogin() {

}
