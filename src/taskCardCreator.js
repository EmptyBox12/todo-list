export default function createTaskCard(title, description, date,priority, id) {
    let titleP = document.createElement("p");
    titleP.textContent=title;
    titleP.classList.add("title");

    let descriptionP = document.createElement("p");
    descriptionP.textContent=description;
    descriptionP.classList.add("description");

    let firstPart = document.createElement("div");
    firstPart.classList.add("firstPart");

    firstPart.appendChild(titleP);
    firstPart.appendChild(descriptionP);

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

    let display = document.querySelector("#display");
    display.appendChild(task);

    
}