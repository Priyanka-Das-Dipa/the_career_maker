import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { motion } from "framer-motion";
const Services = () => {
  
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="mb-12 text-4xl font-bold  text-center sm:text-5xl">
        Popular Services
      </h1>
      <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
      <div className="grid grid-cols-2 gap-5">
        {services?.slice(0, 4).map((service) => (
          <div key={service._id} className="max-w-lg p-4 rounded-3xl shadow-md dark:bg-gray-900 dark:text-gray-100">
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
                <a rel="noopener noreferrer" href="#" className="flex justify-between">
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
                src={service.serviceProvider?.image}
              />
              <p className="text-md font-bold">
                {service.serviceProvider?.name}
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
        </motion.div>
      <div className="flex justify-end pt-5">
        {user ? (
          <Link to="service">
            <button className="btn btn-accent my-3 ">See All Services</button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn btn-accent my-3 ">See All Services</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Services;
