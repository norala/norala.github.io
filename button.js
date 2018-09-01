// const clickButton = buttonName => {
//     const buttonLabel = 'projects';

//     const button = document.createElement("button");
//     button.innerText = buttonLabel;

//     return button;
// };

function clickButton() {
    document.getElementById("projects-button").addEventListener("click", function(){
            document.getElementById("project-container").classList.add("show-projects");
            document.getElementById("projects-button").innerHTML = "Next Project";
            document.getElementById("projects-button").classList.add("next-button");
            document.getElementById("container-bgd").style.background = "none";
            document.getElementById("site-name").classList.add("main-title");
        });
}

module.exports = clickButton;
