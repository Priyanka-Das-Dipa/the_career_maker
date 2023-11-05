import { Outlet } from "react-router-dom";
import Navigation from "../shared/Navigation";

const MianLayOut = () => {
  return <div>
    <Navigation></Navigation>
    <Outlet></Outlet>


  </div>;
};

export default MianLayOut;
