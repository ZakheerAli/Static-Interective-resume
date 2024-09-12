var myskill = document.getElementById("skill");
var toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", function () {
    if (myskill.style.display === "none") {
        myskill.style.display = "block";
    }
    else {
        myskill.style.display = "none";
    }
});
