import { Carousel } from "flowbite-react";
import Faq from "./Faq";
import About from "./About";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <div className="min-h-screen max-w-[1200px] mx-auto">
        <div className="mt-20 mx-auto w-[650px]"></div>
        <Services></Services>
        <About></About>
        <Faq></Faq>
      </div>
    </>
  );
};

export default Home;
