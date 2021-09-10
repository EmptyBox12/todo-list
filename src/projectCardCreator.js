export default function projectCardCreator(name, id) {
    let content = document.querySelector("#lowerSection");

    let projectButton = document.createElement("button");
    projectButton.classList.add("projectButton");
    projectButton.textContent=name;
    projectButton.setAttribute("data-id",id);

    let deleteButton = document.createElement("button");
    deleteButton.textContent="X";
    deleteButton.classList.add("deleteProjectButton");
    deleteButton.setAttribute("data-id",id);

    let projectContainer = document.createElement("div");
    projectContainer.classList.add("projectButtonContainer");
    
    projectContainer.setAttribute("data-id",id);
    projectContainer.appendChild(deleteButton);
    projectContainer.appendChild(projectButton);

    content.appendChild(projectContainer);
    
}