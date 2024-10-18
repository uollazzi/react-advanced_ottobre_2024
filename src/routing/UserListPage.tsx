import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Pippo" },
  { id: 2, name: "Franco" },
  { id: 3, name: "Gianna" },
];

const UserListPage = () => {
  return (
    <ul className="list-group">
      {users.map((u) => (
        <li className="list-group-item" key={u.id}>
          <Link to={`/users/${u.id}`}>{u.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UserListPage;
