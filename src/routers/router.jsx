import { createBrowserRouter } from "react-router-dom";
import MianLayOut from "../layOut/MianLayOut";
import ErrorPage from "../shared/ErrorPage";
import Services from "../Pages/Services";
import Home from "../component/Home/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import MyServices from "../component/MyServices";
import MySchedules from "../component/MySchedules";
import AddServices from "../component/AddServices";

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MianLayOut></MianLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "service",
        element: <Services></Services>

      },
      {
        path: "myServices",
        element: <MyServices></MyServices>
      },
      {
        path: "mySchedule",
        element: <MySchedules></MySchedules>
      },
      {
        path: "addServices",
        element: <AddServices></AddServices>
      }

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
