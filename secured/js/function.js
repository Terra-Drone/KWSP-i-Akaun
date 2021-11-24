var navbar      = document.getElementById("navbar"),
    navi        = document.getElementById("navi"),
    dropcontent = document.getElementsByClassName('dropdown-content'),
    dim         = document.getElementsByClassName("dim");

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

//LOGIN


//MAIN PAGE
//Date for chart
function showDate() {
  today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    document.getElementById("date").innerHTML = date;
}

window.onload = function(){
  //Donut Chart
  //dataset
  var data = {
    labels: ["Akaun 1","Akaun 2"],
    datasets: [{
      data: [12,3],
      backgroundColor: ["#430092","#36A2EB"],
      hoverBackgroundColor: ["#430092","#36A2EB"],
      cutout: ["70%"],
    }]
  };

  //init & config
  var chart = new Chart(document.getElementById('myAkaun'), {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      title: { display: true, text: 'Chart.js Doughnut Chart'},
      legend: { display: true, position: 'right', align: 'end'},
      labels: { font: {size: 12}}
    }
  });

  Chart.pluginService.register({
    beforeDraw: function(chart) {

    }
  });

  Chart.defaults.font.size = 16;
}
