import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/users/Users";
import AddUser from "./pages/users/AddUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users />,
        children: [
          {
            path: "/users/list",
            element: <Users />,
          },
          {
            path: "/users/add-user",
            element: <AddUser />,
          },
        ],
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);
