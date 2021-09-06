export default class Task{
    constructor(title, description, date, priority){
        this.title=title;
        this.description=description;
        this.date=date;
        this.priority=priority;
    }
    getTitle(){
        return this.title;
    }
    getDescription(){
        return this.description;
    }
    getDate(){
        return this.date;
    }
    getPriority(){
        return this.priority;
    }
}