document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const ul = document.createElement("ul");
            data.forEach(element => {
                const li = document.createElement("li")
                
                li.textContent = element.content;
                ul.appendChild(li);
            });
            document.querySelector("div.competitions").appendChild(ul);
        })
        .catch(error => {
            console.error(error);
        });
});