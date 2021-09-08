export default class Project{
    constructor(name){
        this.name=name;
        this.taskList=[];
    }
    getName(){
        return this.name;
    }
    addTask(task){
        this.taskList.push(task);
    }
    getTaskList(){
        return this.taskList;
    }
    getTask(index){
        return this.taskList[index];
    }
    deleteTask(index){
        this.taskList.splice(index,1);
    }
}