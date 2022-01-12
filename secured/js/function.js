var navbar = document.getElementById("navbar"),
    sticky = navbar.offsetTop;


//NAVBAR SETTINGS
function collapseNav() {
  if (navbar.className === "topnav") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }
}

window.onscroll = function() { stickyNav() };

function stickyNav() {
  navbar.style.transition= "350ms ease";
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


//LOGIN

//MAIN PAGE
window.onload = function statementYear() {
  var selYear = document.getElementById("selYear");

  thisYear = new Date();
  var a = thisYear.getFullYear();
  var b = thisYear.getFullYear()-1;
  selYear.options[selYear.options.length] = new Option(a, b);
}

//Date for chart
let today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

//Chart
window.onload = function(){
  //dataset
  var data = {
    labels: [" Akaun 1"," Akaun 2"],
    datasets: [{
      data: [1300.00, 895.75],
      backgroundColor: ["#430092","#E0B542"],
      hoverBackgroundColor: ["#4336AB","#F0C34E"],
      cutout: ["70%"],
    }]
  };

  //init & config
  var chart = new Chart(document.getElementById('myChart'), {
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
        let width = chart.chartArea.left + chart.chartArea.right;
        let height = chart.chartArea.top + chart.chartArea.bottom;
        let ctx = chart.ctx;

        ctx.restore();
        //Font setting
        let fontSize = (height / 250).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        let text = "Balance as of:";
        //Center text
        let textX = width / 2;
        let textY = height / 2;
        var lineheight = 15;
        ctx.fillText(text, textX, (textY - lineheight));
        ctx.fillText(date, textX, (textY + 2*lineheight));
        ctx.save();
      },
    };

  Chart.register(centerDoughnutPlugin);
}
