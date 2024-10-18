import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import AuthProvider from "./state-management/AuthProvider";
import TasksProvider from "./state-management/TasksProvider";

function App() {
  // const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  // const [user, userDispatch] = useReducer(authReducer, "");

  return (
    <div className="container py-3">
      <AuthProvider>
        <TasksProvider>
          {/* <AuthContext.Provider value={{ user, dispatch: userDispatch }}> */}
          {/* <TasksContext.Provider
          value={{ tasks: tasks, dispatch: tasksDispatch }}
        > */}
          <NavBar />
          <HomePage />
        </TasksProvider>
        {/* </TasksContext.Provider> */}
        {/* </AuthContext.Provider> */}
      </AuthProvider>
    </div>
  );
}

export default App;
