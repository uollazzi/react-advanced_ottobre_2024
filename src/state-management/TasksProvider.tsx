import { ReactNode, useReducer } from "react";
import TasksContext from "./contexts/tasksContext";
import tasksReducer from "./reducers/tasksReducer";

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks: tasks, dispatch: tasksDispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
