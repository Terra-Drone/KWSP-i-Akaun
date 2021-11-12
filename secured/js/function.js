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

//LOGIN


//MAIN PAGE
//Date for chart
window.onload = function showDate() {
  today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
}

var data = {
  labels: [
    "Akaun 1",
    "Akaun 2"
  ],
  datasets: [
    {
      data: [12,2],
      backgroundColor: [
        "#430092",
        "#36A2EB"
      ],
      hoverBackgroundColor: [
        "#430092",
        "#36A2EB"
      ]
    }]
};

var akaunBalance = new Chart(document.getElementById('myAkaun'), {
  type: 'doughnut',
  data: data,
  options: {
  	responsive: true,
    legend: { display: false }
  }
});

Chart.pluginService.register({
  beforeDraw: function(chart) {
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var text = showDate();

    ctx.fillText(text);
    ctx.save();
  }
});
