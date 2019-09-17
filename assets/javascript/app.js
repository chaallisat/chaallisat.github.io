
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

// Materialize Slideshow box


      

//Clear the alert box
$(".alert").on("click", function(){
    $(".alert").empty();
    window.location.replace("portfolio.html");
    projects();
    
});

//Links for train project
$(".traina").on("click", function(event){
  event.preventDefault();
  window.open("https://chaallisat.github.io/Train-Scheduler/");
});
$(".trainb").on("click", function(event){
  event.preventDefault();
  window.open("https://github.com/chaallisat/Train-Scheduler");
});

//Links for Expense
$(".exa").on("click", function(event){
  event.preventDefault();
  window.open("https://chaallisat.github.io/expense/");
});
$(".exb").on("click", function(event){
  event.preventDefault();
  window.open("https://github.com/chaallisat/expense");
});

//Links for picnic planner
$(".ppa").on("click", function(event){
  event.preventDefault();
  window.open("https://chaallisat.github.io/Project-One/");
});
$(".ppb").on("click", function(event){
  event.preventDefault();
  window.open("https://github.com/chaallisat/Project-One.git");
});

//Links for crystal game
$(".crystala").on("click", function(event){
  event.preventDefault();
  window.open("https://chaallisat.github.io/unit-4-game/");
});
$(".crystalb").on("click", function(event){
  event.preventDefault();
  window.open("https://github.com/chaallisat/unit-4-game.git");
});


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
