
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
  header.append("Test Header");
  header.css("color", "pink")

  const season = $(".season");
  season.css({
    "color": "pink",
    "font-style": "italic",
    "font-family": "Pacifico, cursive"
  })

  const img = "https://live.staticflickr.com/1552/26472222651_3710758ffe_b.jpg";
  const image = $(".seasonImg");
  image.attr("src", img);

  // $(".test").attr("src", img);
  const navImg =""
  const bkimg = ""
  $("#bk-img").attr("src", img);
  
  $(".page-footer").css("background", "lightgreen")
  $("nav").css({
    "background": "black",
  })
  $(".test").css({
    "background-image": `url(${img})`
  })
  $("#season-color").addClass("orange")
  $("#season-color1").addClass("yellow")
  $("#js-btn-color").addClass("green")
}

spring();
// winter();

function winter() {
  const header = $("#seasonHeader");
  header.append("Happy Holidays!");
  header.css("color", "#40c4ff")

  const img = "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?cs=srgb&dl=black-and-white-cold-fog-235621.jpg&fm=jpg";
  const image = $(".seasonImg");
  image.attr("src", img);

  $(".test").attr("src", img);

  const bkimg = "https://cdn12.picryl.com/photo/2016/12/31/winter-beauty-winter-portrait-winter-trees-16a27a-1024.jpg"
  $("#bk-img").attr("src", bkimg);

  const season = $(".season");
  season.css({
    "color": "#40c4ff",
    "font-style": "italic",
    "font-family": "Pacifico, cursive"
  })

}

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
