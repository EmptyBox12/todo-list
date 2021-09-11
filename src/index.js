import Task from "./task.js";
import Project from "./project.js";
import projectCardCreator from "./projectCardCreator.js";
import createTaskCard from "./taskCardCreator.js";
import { deleteButton, completeButton, deleteProject } from "./buttons.js";

const createProject = document.querySelector(".createProjectButton");
const modalCreateProject = document.querySelector("#modalCreateProject");
const submitProject = document.querySelector("#submitProjectButton");
const addTask = document.querySelector("#addTask");
const homeButton = document.querySelector("#homeButton");
const addTaskModal = document.querySelector("#modalAddTask");
const submitTask = document.querySelector("#submitTaskButton");
const editTaskModal = document.querySelector("#modalEditTask");
const submitEdit = document.querySelector("#submitTaskEditButton");
const closeDetail = document.querySelector(".closeDetail");
let detailModal = document.querySelector("#modalDetails");

let home = new Project("home");
let projectList = [];

createProject.addEventListener("click", () => {
    modalCreateProject.style.display = "block";

});

window.addEventListener("click", function (event) {
    if (event.target == modalCreateProject) {
        modalCreateProject.style.display = "none";
    } else if (event.target == addTaskModal) {
        addTaskModal.style.display = "none";

    } else if (event.target == editTaskModal) {
        editTaskModal.style.display = "none";
    } else if (event.target == detailModal){
        detailModal.style.display = "none";
    }
});
submitProject.addEventListener("click", () => {
    const projectNameInput = document.querySelector("#projectNameInput");
    let projectName = projectNameInput.value;
    let newProject = new Project(projectName);
    projectList.push(newProject);
    projectCardCreator(newProject.getName(), projectList.indexOf(newProject));
    projectButton();
    deleteProject(projectList, clearDisplay);
    modalCreateProject.style.display = "none";
});

function projectButton() {
    let projectButtons = document.querySelectorAll(".projectButton");
    projectButtons.forEach(item => {
        item.addEventListener("click", () => {
            addTask.setAttribute("data-id", item.getAttribute("data-id"));
            let renderProject = projectList[item.getAttribute("data-id")];
            clearDisplay();
            renderTasks(renderProject);

        });
    });

}
homeButton.addEventListener("click", () => {
    addTask.setAttribute("data-id", homeButton.getAttribute("data-id"));
    clearDisplay();
    renderTasks(home);

});


function renderTasks(project) {
    project.getTaskList().forEach(task => {
        createTaskCard(task.getTitle(), task.getDescription(), task.getDate(), task.getPriority(), project.getTaskList().indexOf(task), task.isComplete());
        completeButton(projectList.indexOf(project), projectList, home);
        deleteButton(projectList.indexOf(project), projectList, home, clearDisplay, renderTasks);
        showDetails(projectList.indexOf(project));
    });


}
function clearDisplay() {
    let display = document.querySelector("#display");

    let tasks = document.querySelectorAll(".task");
    tasks.forEach(task => {
        display.removeChild(task);
    });
}
addTask.addEventListener("click", () => {
    addTaskModal.style.display = "block";

});
submitTask.addEventListener("click", () => {
    const taskNameInput = document.querySelector("#taskNameInput");
    const descriptionInput = document.querySelector("#taskDescriptionInput");
    const dateInput = document.querySelector("#taskDateInput");
    const priorityInput = document.querySelector("#priorityInput");
    let id = addTask.getAttribute("data-id");
    let newTask = new Task(taskNameInput.value, descriptionInput.value, dateInput.value, priorityInput.value);
    if (id == "home") {
        home.addTask(newTask);
        clearDisplay();
        renderTasks(home);
    } else {
        projectList[id].addTask(newTask);
        clearDisplay();
        renderTasks(projectList[id]);

    }
    addTaskModal.style.display = "none";
});
submitEdit.addEventListener("click", () => {
    const newNameInput = document.querySelector("#taskNameEditInput");
    const newDescriptionInput = document.querySelector("#taskDescriptionEditInput");
    const newDateInput = document.querySelector("#taskDateEditInput");
    const newPriorityInput = document.querySelector("#priorityEditInput");
    let projectId = addTask.getAttribute("data-id");
    let taskId = submitEdit.getAttribute("data-id");
    if (projectId == "home") {
        let task = home.getTask(taskId);
        task.setTitle(newNameInput.value);
        task.setDescription(newDescriptionInput.value);
        task.setDate(newDateInput.value);
        task.setPriority(newPriorityInput.value);


    } else {
        let task = projectList[projectId].getTask(taskId);
        task.setTitle(newNameInput.value);
        task.setDescription(newDescriptionInput.value);
        task.setDate(newDateInput.value);
        task.setPriority(newPriorityInput.value);
    }

    editTaskModal.style.display = "none";
    clearDisplay();
    if(projectId =="home"){
        renderTasks(home);
    }
    renderTasks(projectList[projectId]);
});
function showDetails(projectId) {
    let detailsButtons = document.querySelectorAll(".detailsButton");
    let detailName = document.querySelector(".detailName");
    let detailDescription = document.querySelector(".detailDescription");
    let detailDate = document.querySelector(".detailDate");
    let detailPriority = document.querySelector(".detailPriority");

    detailsButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log(projectId);
            detailModal.style.display = "block";
            if (projectId == -1) {
                let task = home.getTask(button.getAttribute("data-id"));
                detailName.textContent = task.getTitle();
                detailDescription.textContent = task.getDescription();
                detailDate.textContent = task.getDate();
                detailPriority.textContent = task.getPriority();
                event.stopImmediatePropagation();
            } else {
                let project = projectList[projectId];
                let task = project.getTask(button.getAttribute("data-id"));
                detailName.textContent = task.getTitle();
                detailDescription.textContent = task.getDescription();
                detailDate.textContent = task.getDate();
                detailPriority.textContent = task.getPriority();
                event.stopImmediatePropagation();
            }
        });
    });
}
closeDetail.addEventListener("click",()=>{
    detailModal.style.display = "none";
});

function start() {
    renderTasks(home);
}


start();