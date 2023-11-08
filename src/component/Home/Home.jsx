import Faq from "./Faq";
import About from "./About";
import Services from "./Services";
import OurTeam from "./OurTeam";



const Home = () => {
  return (
    <>
      <div className="min-h-screen max-w-[1200px] mx-auto">
        
         
        <div className="mt-10 mb-32">
          <section className="dark:bg-gray-800 dark:text-gray-100 background-image">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center ml-2 text-white text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl dark:text-violet-400 font-bold sm:text-6xl">
                  The Career Maker
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                  This is the biggest online Service Platform
                  <br />
                  Make Your Dream comes true
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a className="px-8 btn btn-ghost  py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                    Get Started
                  </a>
                  <a className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">
                    Explore
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src=""
                  alt=""
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
            </div>
          </section>
        </div>
        
        <Services></Services>
        <About></About>
        <OurTeam></OurTeam>
        <Faq></Faq>
        
      </div>
    </>
  );
};

export default Home;
