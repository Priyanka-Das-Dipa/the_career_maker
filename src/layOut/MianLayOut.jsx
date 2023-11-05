import { Outlet } from "react-router-dom";
import Navigation from "../shared/Navigation";
import Footer from "../shared/Footer";

const MianLayOut = () => {
  return <div>
    <div className="mb-10">
    <Navigation></Navigation>
    </div>
    <div className="h-screen max-w-[1200] mx-auto ">
    <Outlet></Outlet>
    </div>
    <Footer></Footer>


  </div>;
};

export default MianLayOut;
