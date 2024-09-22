document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const ul = document.createElement("ul");
            data.reverse().forEach(element => {
                const li = document.createElement("li")
                li.textContent = element.content;
                
                if (element.github) {
                    const a = document.createElement("a");
                    a.className = "githublink";
                    a.href = element.github;
                    a.target = "_blank";
                    const img = document.createElement("img");
                    img.src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
                    a.appendChild(img);
                    li.appendChild(a);
                }

                ul.appendChild(li);
            });
            document.querySelector("div.projects").appendChild(ul);
        })
        .catch(error => {
            console.error(error);
        });
});