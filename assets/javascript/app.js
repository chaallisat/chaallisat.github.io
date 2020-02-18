
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
}

spring();

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
