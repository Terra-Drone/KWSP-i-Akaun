var navbar = document.getElementById("navbar");
var navi = document.getElementById("navi");
var dropcontent = document.getElementsByClassName('dropdown-content');
var dim = document.getElementsByClassName("dim");

//NAVBAR SETTINGS
window.onscroll = function() {stickyNav()};
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
  navbar.style.transition= "350ms ease";
  if (navi.className === "rc_nav") {
      navi.classList.add("responsive");
  } else {
      navi.classList.remove("responsive");
  }
  if (dropcontent.style.display == "block") {
     dim.style.display = "block";
      navbar.style.boderRadius = "125rem 0 0 125rem";
  } else {
     dim.style.display = "none";
     navbar.style.boderRadius = "125rem";
  }
}

//MAIN PAGE
//Date for chart
window.onload = function showDate() {
  today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  document.getElementById("date").innerHTML = date;
}
