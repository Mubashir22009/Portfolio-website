document.addEventListener("DOMContentLoaded", function() {
    fetch("/assets/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navcontainer").innerHTML = data;
        });
});