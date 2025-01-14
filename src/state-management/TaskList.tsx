import useAuth from "./hooks/useAuth";
import useTasks from "./hooks/useTasks";

const TaskList = () => {
  //   const [tasks, setTasks] = useState<Task[]>([]);
  // const [tasks, dispatch] = useReducer(tasksReducer, []);
  // const { tasks, dispatch } = useContext(tasksContext);
  // const { user } = useContext(authContext);
  const { user } = useAuth();
  const { tasks, dispatch } = useTasks();

  return (
    <>
      <p>User: {user}</p>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
