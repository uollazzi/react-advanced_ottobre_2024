import React, { Dispatch } from "react";
import { Task } from "../models/task";
import { TaskActions } from "../reducers/tasksReducer";

interface TasksContextType {
    tasks: Task[],
    dispatch: Dispatch<TaskActions>
}

export default React.createContext<TasksContextType>({} as TasksContextType);