export default function projectCardCreator(name, id) {
    let content = document.querySelector("#lowerSection");

    let projectButton = document.createElement("button");
    projectButton.classList.add("projectButton");
    projectButton.textContent=name;
    projectButton.setAttribute("data-id",id);

    content.appendChild(projectButton);
    
}