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
let today = new Date();

var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();


window.onload = function(){
  //Donut Chart
  //dataset
  var data = {
    labels: [" Akaun 1"," Akaun 2"],
    datasets: [{
      data: [1200.91, 300.31],
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
      legend: { display: false},
      labels: { font: {size: 12}}
    }
  });

  const centerDoughnutPlugin = {
      id: "annotateDoughnutCenter",
      beforeDraw: (chart) => {
        let width = chart.width;
        let height = chart.height;
        let ctx = chart.ctx;

        ctx.restore();
        let fontSize = (height / 220).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        let text = "As of: \n" + date;
        let textX = Math.round((width - ctx.measureText(text).width)/2);
        let textY = height / 1.8;

        console.log("text x: ", textX);
        console.log("text y: ", textY);

        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    };
  Chart.register(centerDoughnutPlugin);
}
