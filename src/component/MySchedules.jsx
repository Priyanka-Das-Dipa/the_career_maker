import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const MySchedules = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {

    axios.get("https://the-career-maker-server-eight.vercel.app/bookings",{
      withCredentials: true,
    } ).then(res => setItems(res.data))
  
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto">
        <h1 className="my-12 text-4xl font-bold  text-center sm:text-5xl">All Schedules</h1>
    <div className="grid grid-cols-2 gap-3 ">
      {items?.map((item) => (
        <div className="max-w-lg p-4 rounded-3xl shadow-md dark:bg-gray-900 dark:text-gray-100">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={item.serviceImage}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="flex font-bold items-center text-xl">
                <span>{item.category}</span>
              </div>
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-violet-400">
                  {" "}
                  {item.serviceName}
                </h3>
              </a>
              <p className=" dark:text-gray-400">{item.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <img
              alt=""
              className="w-12 border h-12 rounded-full ri ri dark:bg-gray-500 ri ri"
              src={item?.serviceProvider?.image}
            />
            <p className="text-md font-bold">{item?.serviceProvider?.name}</p>
          </div>
          <div className="flex justify-center my-3">
            <Link to={`/service/${item._id}`}>
              <button className="btn btn-sm btn-accent">View Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MySchedules;
