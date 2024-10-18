import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import ErrorPage from "./ErrorPAge";
import UsersPage from "./UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "users",
        element: <UsersPage />,
        children: [
          {
            path: ":id",
            element: <UserDetailPage />,
          },
        ],
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  //   {
  //     path: "/",
  //     element: <HomePage />,
  //   },
  //   {
  //     path: "/users",
  //     element: <UserListPage />,
  //   },
  //   {
  //     path: "/users/:id",
  //     element: <UserDetailPage />,
  //   },
  //   {
  //     path: "/contact",
  //     element: <ContactPage />,
  //   },
]);

export default router;
