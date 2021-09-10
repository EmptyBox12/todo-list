export default class Task {
    constructor(title, description, date, priority) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.completed = false;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getDate() {
        return this.date;
    }
    getPriority() {
        return this.priority;
    }
    isComplete(){
        return this.completed;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setDescription(newDescription) {
        this.description = newDescription;
    }
    setDate(newDate) {
        this.date = newDate;
    }
    setPriority(newPriority) {
        this.priority = newPriority;
    }
    setCompleted = (complete) => {
        this.completed = complete;
    }

}