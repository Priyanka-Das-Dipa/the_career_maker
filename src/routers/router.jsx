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
import ServiceDetails from "../Pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import ManageService from "../component/ManageService";
import Update from "../Pages/Update";

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
      {
        path: "service",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },

      {
        path: "myServices",
        element: (
          <PrivateRoute>
            <MyServices></MyServices>
          </PrivateRoute>
        ),
      },
      {
        path: "mySchedule",
        element: (
          <PrivateRoute>
            <MySchedules></MySchedules>
          </PrivateRoute>
        ),
      },
      {
        path: "addServices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "manageService",
        element: (
          <PrivateRoute>
            <ManageService></ManageService>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
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
