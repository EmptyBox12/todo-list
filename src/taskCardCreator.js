export default function createTaskCard(title, description, date,priority, id, complete) {
    let titleP = document.createElement("p");
    titleP.textContent=title;
    titleP.classList.add("title");

    let descriptionP = document.createElement("p");
    descriptionP.textContent=description;
    descriptionP.classList.add("description");

    let firstText = document.createElement("div");
    firstText.classList.add("firstText");
    firstText.appendChild(titleP);
    firstText.appendChild(descriptionP);

    let completedButton = document.createElement("button");
    completedButton.textContent = "✓";
    completedButton.classList.add("completedButton");
    completedButton.setAttribute("data-id", id);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("deleteButton");
    deleteButton.setAttribute("data-id", id);


    let firstButtons = document.createElement("div");
    firstButtons.classList.add("firstButtons");
    firstButtons.appendChild(completedButton);
    firstButtons.appendChild(deleteButton);

    let firstPart = document.createElement("div");
    firstPart.classList.add("firstPart");
    firstPart.appendChild(firstButtons);
    firstPart.appendChild(firstText);

    

    let dateP = document.createElement("p");
    dateP.textContent=date;
    dateP.classList.add("date");

    let priorityP = document.createElement("p");
    priorityP.textContent=priority;
    priorityP.classList.add("priority");

    let secondPart = document.createElement("div");
    secondPart.classList.add("secondPart");
    
    secondPart.appendChild(dateP);
    secondPart.appendChild(priorityP);

    let task = document.createElement("div");
    task.classList.add("task");
    task.appendChild(firstPart);
    task.appendChild(secondPart);
    task.setAttribute("data-taskId", id);
    if(complete==true){
        task.classList.add("completed");
        console.log(complete);
    } else{
        task.classList.remove("completed");
        console.log(complete);
    }

    let display = document.querySelector("#display");
    display.appendChild(task);

    
}