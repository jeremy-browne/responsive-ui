const settings = document.getElementById("settings");
const sublinks = document.getElementsByClassName("sub-link");
const sidebar = document.getElementById("navbar");

settings.addEventListener("click", (event) => {
    Array.from(sublinks).forEach((elem) => {
        console.log(elem.style.display);
        console.log(elem);
        if (elem.style.display === "flex") {
            elem.style.display = "none";
        } else {
            elem.style.display = "flex";
        }
    })
});