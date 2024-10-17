import { useReducer } from "react";
import TasksContext from "./state-management/contexts/tasksContext";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import tasksReducer from "./state-management/reducers/tasksReducer";
import AuthProvider from "./state-management/AuthProvider";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  // const [user, userDispatch] = useReducer(authReducer, "");

  return (
    <div className="container py-3">
      <AuthProvider>
        {/* <AuthContext.Provider value={{ user, dispatch: userDispatch }}> */}
        <TasksContext.Provider
          value={{ tasks: tasks, dispatch: tasksDispatch }}
        >
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
        {/* </AuthContext.Provider> */}
      </AuthProvider>
    </div>
  );
}

export default App;
