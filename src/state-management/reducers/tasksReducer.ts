import { Task } from "../models/task";

interface AddTask {
    type: "ADD",
    task: Task
}

interface DeleteTask {
    type: "DELETE",
    taskId: number
}

export type TaskActions = AddTask | DeleteTask;

const tasksReducer = (tasks: Task[], action: TaskActions): Task[] => {
    if (action.type == "ADD") {
        return [...tasks, action.task];
    }
    if (action.type == "DELETE") {
        return tasks.filter(t => t.id != action.taskId);
    }
    return tasks;
}

export default tasksReducer;