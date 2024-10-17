import useAuth from "./hooks/useAuth";

const LoginStatus = () => {
  //   const [user, setUser] = useState("");
  // const [user, dispatch] = useReducer(authReducer, "");
  // const { user, dispatch } = useContext(authContext);
  const { user, dispatch } = useAuth();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "gigi.verdi" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
