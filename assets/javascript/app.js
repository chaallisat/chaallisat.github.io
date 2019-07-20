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

$(".taba").on("click", function(){
  window.open("https://chaallisat.github.io/Train-Scheduler/");
})

//This fuction is for the displaying of each project
function projects(){

  //Not working.....will come back later

  
  //   box.append("Hello");
  //    $(".container").append(box);
  const col = $(".col-sm-3");
  // box.append("Hello");
  
  const pNames = ["Project 1", "Expense", "Train"]
  
  
  for (let i = 0; i < pNames.length; i++) {
    const box = $("<div class='project-box'>");
    
    box.text(pNames[i]);
    col.append(box);
     $(".container").append(box);
        
  } 

};

function portfolio() {
  
}











//Collapsible JS
const coll = $(".collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}