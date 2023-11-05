import { Outlet } from "react-router-dom";
import Navigation from "../shared/Navigation";
import Footer from "../shared/Footer";

const MianLayOut = () => {
  return <div>
    <Navigation></Navigation>
    <div className="h-screen">
    <Outlet></Outlet>
    </div>
    <Footer></Footer>


  </div>;
};

export default MianLayOut;
