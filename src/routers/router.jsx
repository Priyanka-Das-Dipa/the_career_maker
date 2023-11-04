import { createBrowserRouter } from "react-router-dom";
import MianLayOut from "../layOut/MianLayOut";
import ErrorPage from "../shared/ErrorPage";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Registration from "../Pages/Registration";

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MianLayOut></MianLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registration></Registration>,
  },
]);

export default myCreatedRouter;
