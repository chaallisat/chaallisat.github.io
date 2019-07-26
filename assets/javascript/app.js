window.onload = function() {
    //Create divs
    const welcome = $("<h1>").text("Welcome!");
    const name = $("<h2>").text("My name is ChaA'llisa Taylor");
    const bacon = $("<p>").text("Click anywhere to continue to the site.");

    //This div will hold everything
    const alertDiv = $("<div class='alerts'>")

    alertDiv.append(welcome);
    alertDiv.append(name);
    alertDiv.append(bacon);

    //Append the other divs to the alert div
    $(".alert").append(alertDiv);
};

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

const myEmail = "chaallisat@yahoo.com";
const eName = $("#name").val();
const email = $("#email").val();
const eMessage = $("#message").val();

function generateEmail() {
  const emailTo = myEmail;
  const emailCC = email;
  const emailSubject = "Portfolio - Contact Form";
  const emailBody = "Name: " + eName + "%0A%0AEmail: " + email + "%0A%0AMessage: " + eMessage;
  location.href = "mailto:" + emailTo + "?" + 
    (emailCC ? "cc=" + emailCC : "") + 
    (emailSubject ? "&subject=" + emailSubject : "") + 
    (emailBody ? "&body=" + emailBody : "");
};

$("#submit").on("click", function(){
  generateEmail();
});