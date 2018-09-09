// const clickButton = buttonName => {
//     const buttonLabel = 'projects';

//     const button = document.createElement("button");
//     button.innerText = buttonLabel;

//     return button;
// };

function clickButton() {
    document.getElementById("projects-button").addEventListener("click", function(){
            document.getElementById("project-container").classList.add("show-projects");
            document.getElementById("slide").classList.remove("show-projects");
            document.getElementById("projects-button").style.display="none";
            document.getElementById("projects-button").classList.add("next-button");
            document.getElementById("container-bgd").style.background = "none";
            document.getElementById("site-name").classList.add("main-title");
            document.getElementById("footer-main").style.display="none";
        });
}

module.exports = clickButton;
