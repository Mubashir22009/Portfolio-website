document.addEventListener("DOMContentLoaded", function() {
    fetch("/assets/navbar.html")
        .then(response => response.text())
        .then(data => {
            const nav = document.createElement("div");
            nav.innerHTML = data;
            document.body.prepend(nav)
        });
});