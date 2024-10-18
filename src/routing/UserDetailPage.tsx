import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  console.log(params.id);

  const [searchParams, setSearchParams] = useSearchParams(); // query string
  console.log(searchParams.get("age"));

  const location = useLocation(); // rotta corrente
  console.log(location);

  return <div>User {params.id}</div>;
};

export default UserDetailPage;
