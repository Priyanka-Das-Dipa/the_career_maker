import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Services = () => {
  const { user, loading } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("https://the-career-maker-server-eight.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const filteredServices = services.filter((service) =>
    service?.serviceName?.toLowerCase()?.includes(searchItem.toLowerCase())
  );
  if(loading){
    return <span className="loading loading-spinner flex justify-center items-center text-center text-red-600 loading-lg"></span> 
  }
  return (
    <>
    
    <div className="max-w-[1200px] mx-auto">
      <div>
        <h1 className="my-12 text-4xl font-bold  text-center sm:text-5xl">
          All Services
        </h1>
        <input
          type="text"
          placeholder="Search services by name"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="w-full p-3 mb-4 border rounded-md"
        />
        <div className="grid grid-cols-2 justify-evenly items-center mb-10 gap-5">
          {(searchItem === "" ? services : filteredServices)
            .slice(0, showAll ? services.length : 6)
            .map((service) => (
              <div
                key={service._id}
                className="max-w-lg p-4 rounded-3xl shadow-md dark:bg-gray-900 dark:text-gray-100"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <img
                      src={service.serviceImage}
                      alt=""
                      className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                    />
                    <div className="flex font-bold items-center text-xl">
                      <span>{service.category}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="justify-between flex ">
                      <h3 className="text-xl font-semibold dark:text-violet-400">
                        {" "}
                        {service.serviceName}
                      </h3>
                      <h3 className="text-xl font-semibold dark:text-violet-400">
                        {" "}
                        <span className="text-accent">Location:</span> {service.location}
                      </h3>
                    </a>
                    <p className=" dark:text-gray-400">{service.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <img
                    alt=""
                    className="w-12 border h-12 rounded-full ri ri dark:bg-gray-500 ri ri"
                    src={service?.serviceProvider?.image}
                  />
                  <p className="text-md font-bold">
                    {service?.serviceProvider?.name}
                  </p>
                </div>
                <div className="flex justify-center my-3">
                  <Link to={`/service/${service._id}`}>
                    <button className="btn btn-sm btn-accent">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>

        {services.length > 6 && (
          <div className="flex items-center justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-accent btn-wide"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
    
    </>
  );
};

export default Services;
