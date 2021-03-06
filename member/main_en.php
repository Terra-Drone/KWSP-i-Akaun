<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>i-Akaun</title>
  <!--css-->
  <link rel="stylesheet" href="../secured/css/master.css" type="text/css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <!--bootstrap-->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.min.js" integrity="sha512-UR25UO94eTnCVwjbXozyeVd6ZqpaAE9naiEUBK/A+QDbfSTQFhPGj5lOR6d8tsgbBk84Ggb5A3EkjsOgPRPcKA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.0/chart.min.js" integrity="sha512-GMGzUEevhWh8Tc/njS0bDpwgxdCJLQBWG3Z2Ct+JGOpVnEmjvNx6ts4v6A2XJf1HOrtOsfhv3hBKpK9kE5z8AQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

  <!--JQuery-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

  <!--Regex-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/is_js/0.9.0/is.min.js" integrity="sha512-DvhVUdQWYI9UoF5HGHhl00nbUFcr+j6dGlg/FSrolqR3EridE8CF82nCNAZsE4iAPkw/ws0O7IrZ1jOUuJQXxg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <![if IE 6]>
  <style type="text/css">
    #header #tab {
      padding: 80px 10px 0 174px;
      float:left;
      width:550px;
      height:30px;
      line-height:normal;
    }

    #header #tab a {
      padding: 10px 0 0 10px;
      font-weight:normal;
      float: left;
      color:#c70108;
      font-size:12px;
      text-decoration:none;
      height:20px;
      margin-right:5px;
    }

    #header #tab a span {
      padding: 10px 10px 0 0;
      float: none;
      display:inline;
    }

    .customFBGeneral ul.feedbackPanel{ margin: 5px 30px !important; }
    </style>
  <![endif]-->
</head>

<body style="background: url(../secured/images/seamless-white.jpg);">
  <?php
  $servername = "localhost";
  $username = "root";
  $password = "12345";
  $dbname = "kwsp";

  // Create connection
  $conn= mysqli_connect($servername,$username,$password,$dbname);
  // Check connection
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  echo "Connected Successfully.";
  ?>

  <div class="responsive-navi">
  	<div class="responsive-navi-mobile" id="navbar">
  		<div id="logo">
  			<a href="https://www.kwsp.gov.my/en/home"><img src="../secured/images/logo_en.png"></a>
  		</div>
  		<div class="rc_nav" id="navi">
  			<ul>
  				<li class="dropdown" id="profile"><a href="#">PROFILE</a></li>
  				<li class="dropdown" id="nomination"><a href="#">NOMINATION</a></li>
  				<li class="dropdown" id="shariah"><a href="#">SIMPANAN SHARIAH</a></li>
  				<li class="dropdown" id="enquiry"><a href="">ENQUIRY</a></li>
  				<li class="dropdown" id="investment"><a href="#">INVESTMENT</p></li>
          <li class="dropdown" id="withdrawal"><a href="#">WITHDRAWAL</p></li>
          <li class="dropdown" id="inbox"><a href="#">INBOX</p></li>
  				<li><a href="javascript:void(0);" title="Menu" style="font-size:18px;" class="icon" onclick="hideDrop()">&#9776;</a></li>
  			</ul>
  		</div>
  		<div class="lang">
  			<ul>
  				<li><a href="main_bm.html">BM</a></li>
  				<li><a href="#" class="selected">EN</a></li>
  			</ul>
  		</div>
  	</div>
  </div>
  <div class="main">
    <div class="col-md-12">
      <div class="container">
        <div class="row">
          <div class="welcome-text" style="width:100%; color:#ffffff; font-size; 20px;"> Welcome, Test User.
          </div>
          <div class="chart-container">
            <canvas id="myAkaun"></canvas>
          </div>
          <div class="">

          </div>
          <div class="">

          </div>
          <div class="">

          </div>
        </div>
      </div>
    </div>
  </div>


  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.js" integrity="sha512-b3xr4frvDIeyC3gqR1/iOi6T+m3pLlQyXNuvn5FiRrrKiMUJK3du2QqZbCywH6JxS5EOfW0DY0M6WwdXFbCBLQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <!--jquery-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <!--JS-->
  <script src="../secured/js/function.js" charset="utf-8"></script>
</body>
</html>
