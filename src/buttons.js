export function deleteButton(projectId, projectList, home) {
    let deleteButtons = document.querySelectorAll(".deleteButton");
    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {
            let taskId = button.getAttribute("data-id");
            if (projectId == -1) {
                let selectedTask = document.querySelector(`[data-taskId="${taskId}"]`);
                let display = document.querySelector("#display");
                display.removeChild(selectedTask);
                home.deleteTask(taskId);
                event.stopImmediatePropagation()


            } else {
                let selectedTask = document.querySelector(`[data-taskId="${taskId}"]`);
                let display = document.querySelector("#display");
                display.removeChild(selectedTask);
                projectList[projectId].deleteTask(taskId);
                event.stopImmediatePropagation()


            }

        });

    });

}

export function completeButton(projectId, projectList, home) {
    let completedButtons = document.querySelectorAll(".completedButton");
    completedButtons.forEach(function(button) {
        button.addEventListener("click", () => {
            let taskId = button.getAttribute("data-id");
            if (projectId == -1) {
                let task = home.getTask(taskId);
                let selectedTask = document.querySelector(`[data-taskId="${taskId}"]`);
                console.log(task.isComplete());
                if (task.isComplete() == false) {
                    console.log("false"+task);
                    task.setCompleted(true);
                    selectedTask.classList.add("completed");
                    event.stopImmediatePropagation()
                    

                } else if (task.isComplete() == true) {
                    console.log("true"+task);
                    task.setCompleted(false);
                    selectedTask.classList.remove("completed");
                    event.stopImmediatePropagation()
                    

                }

            } else {
                let task = projectList[projectId].getTask(taskId);
                let selectedTask = document.querySelector(`[data-taskId="${taskId}"]`);
                console.log(selectedTask);
                console.log(task);
                console.log(projectList[projectId].getTaskList());
                console.log(button);
                if (task.isComplete() == false) {
                    task.setCompleted(true);
                    selectedTask.classList.add("completed");
                    event.stopImmediatePropagation()
                    
                    

                } else if (task.isComplete() == true) {
                    task.setCompleted(false);
                    selectedTask.classList.remove("completed");
                    event.stopImmediatePropagation()
                    
                }
            }

        });
    });

}
