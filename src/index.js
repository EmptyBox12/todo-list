import Task from "./task.js";
import Project from "./project.js";
import projectCardCreator from "./projectCardCreator.js";
import createTaskCard from "./taskCardCreator.js";

const createProject = document.querySelector(".createProjectButton");
const modalCreateProject = document.querySelector("#modalCreateProject");
const submitProject = document.querySelector("#submitProjectButton");
const addTask = document.querySelector("#addTask");
const homeButton = document.querySelector("#homeButton");
const addTaskModal = document.querySelector("#modalAddTask");
const submitTask = document.querySelector("#submitTaskButton");
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

    }
});
submitProject.addEventListener("click", () => {
    const projectNameInput = document.querySelector("#projectNameInput");
    let projectName = projectNameInput.value;
    let newProject = new Project(projectName);
    projectList.push(newProject);
    projectCardCreator(newProject.getName(), projectList.indexOf(newProject));
    projectButton();
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
        createTaskCard(task.getTitle(), task.getDescription(), task.getDate(), task.getPriority(), project.getTaskList().indexOf(task));
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


function start() {
    renderTasks(home);
}
start();