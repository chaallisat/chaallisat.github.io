
// Materialize sideNavBar JS
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
});
$(document).ready(function(){
  $('.sidenav').sidenav();
});
$(".sidenav-trigger").on("click", function(event) {
  var instance = M.Sidenav.getInstance(elems);
  instance.open();
});

// Materialize Parallax
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  // var instances = M.Parallax.init(elems, options);
});
$(document).ready(function(){
  $('.parallax').parallax();
  var instance = M.Parallax.getInstance(elems);
});
      
      

function spring() {
  const header = $("#seasonHeader");
  header.append("Spring into Code!");
  header.css("color", "#81c784")

  const season = $(".season");
  season.css({
    "color": "#81c784",
    "font-style": "italic",
    "font-family": "Pacifico, cursive"
  })

  const img = "https://live.staticflickr.com/1552/26472222651_3710758ffe_b.jpg";
  $(".seasonImg").attr("src", img);

  // $(".test").attr("src", img);
  const bttmImg = "https://live.staticflickr.com/1552/26472222651_3710758ffe_b.jpg"
  const navImg ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6udZjJ4gF6Qyj3GfLYvE9j3IcOMUT2zm42tiCL8mawri_gBCVQ"
  const bkImg = "http://c1.peakpx.com/wallpaper/1014/607/656/meadow-flowers-plant-tulips-spring-wallpaper-preview.jpg";
  $("#bk-img").attr("src", bkImg);
  $(".bttm-img").attr("src", bttmImg);
  
  $(".page-footer").css("background", "#81c784")
  $("nav").css({"background": "black"})
  $(".test").css({
    "background-image": `url(${navImg})`
  })
  $("#season-color").addClass("green")
  $("#season-color1").addClass("green")
  $("#js-btn-color").addClass("green")
  $("#js-btn-color").addClass("lighten-2")
}

function winter() {
  const header = $("#seasonHeader");
  header.append("Happy Holidays!");
  header.css("color", "#40c4ff")
  
  const season = $(".season");
  season.css({
    "color": "#40c4ff",
    "font-style": "italic",
    "font-family": "Pacifico, cursive"
  })
  
  const img = "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?cs=srgb&dl=black-and-white-cold-fog-235621.jpg&fm=jpg";
  $(".seasonImg").attr("src", img);
  
  $(".test").attr("src", img);
  
  const bttmImg = ""
  const navImg = ""
  const bkImg = "https://cdn12.picryl.com/photo/2016/12/31/winter-beauty-winter-portrait-winter-trees-16a27a-1024.jpg"
  $("#bk-img").attr("src", bkImg);
  $(".bttm-img").attr("src", img);
  
  $(".page-footer").css("background", "#40c4ff")
  $("nav").css({"background": "black"})
  $(".test").css({
    "background-image": `url(${img})`
  })
  $("#season-color").addClass("light-blue")
  $("#season-color1").addClass("light-blue")
  $("#js-btn-color").addClass("light-blue")
  $("#js-btn-color").addClass("lighten-2")
  
}

function fall() {
  const header = $("#seasonHeader");
  header.append("Its Autumn!");
  header.css("color", "#f57c00")
  
  const season = $(".season");
  season.css({
    "color": "#f57c00",
    "font-style": "italic",
    "font-family": "Pacifico, cursive"
  })
  
  const img = "https://p2.piqsels.com/preview/285/405/137/autumn-fall-grass-leaves.jpg";
  $(".seasonImg").attr("src", img);
  
  // $(".test").attr("src", img);
  const bttmImg = "https://storage.needpix.com/rsynced_images/autumn-background-1504374097fwh.jpg"
  const navImg ="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?cs=srgb&dl=colorful-colourful-forest-33109.jpg&fm=jpg"
  const bkImg = "https://torange.biz/photo/35/IMAGE/pumpkin-autumn-background-pumpkins-leaves-blank-35215.jpg";
  $("#bk-img").attr("src", bkImg);
  $(".bttm-img").attr("src", bttmImg);
  
  $(".page-footer").css("background", "#f57c00")
  $("nav").css({"background": "black"})
  $(".test").css({
    "background-image": `url(${navImg})`
  })
  $("#season-color").addClass("orange")
  $("#season-color1").addClass("orange")
  $("#js-btn-color").addClass("orange")
  $("#js-btn-color").addClass("darken-2")
}

function summer() {
  const header = $("#seasonHeader");
  header.append("Summer Time Fun!");
  header.css("color", "#07e1b6")

  const season = $(".season");
  season.css({
    "color": "#07e1b6",
    "font-style": "italic",
    "font-family": "Pacifico, cursive"
  })

  const img = "https://cdn.pixabay.com/photo/2018/07/05/21/47/summer-3519261_960_720.jpg";
  $(".seasonImg").attr("src", img);

  // $(".test").attr("src", img);
  const bttmImg = "https://cdn.pixabay.com/photo/2017/03/27/14/49/beach-2179183_960_720.jpg"
  const navImg ="https://images.pexels.com/photos/2678/nature-sky-sunny-clouds.jpg?cs=srgb&dl=nature-sky-sunny-clouds-2678.jpg&fm=jpg"
  const bkImg = "https://i2.pickpik.com/photos/801/455/751/sea-shells-shells-sea-sea-shell-preview.jpg";
  $("#bk-img").attr("src", bkImg);
  $(".bttm-img").attr("src", bttmImg);
  
  $(".page-footer").css("background", "#07e1b6")
  $("nav").css({"background": "black"})
  $(".test").css({
    "background-image": `url(${navImg})`,
    // "background-position": "center"
  })
  $("#season-color").addClass("blue")
  $("#season-color1").addClass("blue")
  $("#js-btn-color").addClass("red")
  $("#js-btn-color").addClass("lighten-2")
}

function time() {
  let currentDay = moment()
  console.log(`CURRENT DAY: ${moment(currentDay).format("MM-DD-YYYY")}`);
  if (moment().isBetween("2020-02-19", '2020-05-31')) { // 2020-03-01 is original date
    spring();
  }
  else if (moment().isBetween("2020-12-01", '2021-01-31')) {
    winter();
  }
  else if (moment().isBetween("2020-09-01", '2020-11-30')) {
    fall();
  }
  else if (moment().isBetween("2020-06-01", '2020-08-31')) {
    summer();
  }

  // End of 4 Seasons ----- To be implemented in year 2021

  else if (moment().isSame("2021-02-01", 'month')) {
    // Valentine's Day
    hearts();
  }
  else if (moment().isSame("2021-09-01", 'month')) {
    // Saint Patrick's Day
    patty();
  }
  // else if (moment().isSame("2020-09-01")) {
  //   fall();
  // }
  // else if (moment().isSame("2020-09-01")) {
  //   fall();
  // }
  // else if (moment().isSame("2020-09-01")) {
  //   fall();
  // }
  // else {
  //   winter();
  // }
}


// spring();
// winter();
// fall();
time();
// summer();



//Collapsible JS
const coll = $(".collapsible");
let i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("actives");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
