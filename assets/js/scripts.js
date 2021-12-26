const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", function (e) {
    this.src = "./"

    if (body.classList.contains("light")) {
        body.classList.replace("light", "dark");
    } else {
        body.classList.replace("dark", "light");
    }
});