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
    projects();
});

function projects(){

    const box = $("<div class='project-box'>");
    
    //   box.append("Hello");
    //    $(".container").append(box);
    const col = $("<div class='col-sm-3'>");
    box.append("Hello");
    col.append(box);
    $(".container").append(box);
    
    for (let i = 0; i < col.length; i++) {
        box.append("Hello");
    col.append(box);
    $(".container").append(box);
        
    }

};











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