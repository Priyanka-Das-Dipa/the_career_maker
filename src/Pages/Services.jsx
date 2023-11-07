import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Services = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div>
        <h1 className="my-12 text-4xl font-bold  text-center sm:text-5xl">
          All Services
        </h1>
        <div className="grid grid-cols-2 justify-evenly items-center mb-10 gap-5">
          {services?.map((service) => (
            <div key={id} className="max-w-lg p-4 rounded-3xl shadow-md dark:bg-gray-900 dark:text-gray-100">
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
                  <a rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold dark:text-violet-400">
                      {" "}
                      {service.serviceName}
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
                <button className="btn btn-sm btn-accent">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Services;
