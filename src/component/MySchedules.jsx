import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MySchedules = () => {
  const [booking, setBooking] = useState([]);
  const [pending, setPending] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user.email);
  useEffect(() => {
    axios
      .get("https://the-career-maker-server-eight.vercel.app/bookings", {
        withCredentials: true,
      })
      .then((res) => {
        const userBookings = res.data.filter(
          (booking) => booking.buyerEmail && booking.buyerEmail === user?.email
        );
        setBooking(userBookings);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://the-career-maker-server-eight.vercel.app/bookings", {
        withCredentials: true,
      })
      .then((res) => {
        const userPending = res.data.filter(
          (pending) =>
            pending.serviceProvider.email &&
            pending.serviceProvider.email === user?.email
        );
        setPending(userPending);
      });
  }, []);
  console.log(booking);

  return (
    <>
      <h1 className="my-12 text-4xl font-bold  text-center sm:text-5xl">
        All Schedules
      </h1>
      <div className="max-w-[1200px] mx-auto flex gap-10">
        <div className="w-1/2">
          <h1 className="my-12 text-4xl font-bold  text-center sm:text-5xl">
            My Bookings
          </h1>
          <div className="grid grid-cols-2 gap-3 ">
            {booking?.map((booking, index) => (
              <div
                key={index}
                className="max-w-lg p-4 rounded-3xl shadow-md dark:bg-gray-900 dark:text-gray-100"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <img
                      src={booking.serviceImage}
                      alt=""
                      className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                    />
                    <div className="flex font-bold bookings-center text-xl">
                      <span>{booking.category}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                      <h3 className="text-xl font-semibold dark:text-violet-400">
                        {" "}
                        {booking.serviceName}
                      </h3>
                    </a>
                    <p className=" dark:text-gray-400">{booking.description}</p>
                  </div>
                </div>
                <div className="flex bookings-center gap-2 mt-3">
                  <img
                    alt=""
                    className="w-12 border h-12 rounded-full ri ri dark:bg-gray-500 ri ri"
                    src={booking?.serviceProvider?.image}
                  />
                  <p className="text-md font-bold">
                    {booking?.serviceProvider?.name}
                  </p>
                </div>
                <div className="flex justify-center my-3">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1">
                      Pending
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>In Progress</a>
                      </li>
                      <li>
                        <a>Completed</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="my-12 text-4xl font-bold  text-center sm:text-5xl">
            My Pending Workes
          </h1>
          <div className="grid grid-cols-2 gap-3 ">
            {pending?.map((pend, index) => (
              <div
                key={index}
                className="max-w-lg p-4 rounded-3xl shadow-md dark:bg-gray-900 dark:text-gray-100"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <img
                      src={pend.serviceImage}
                      alt=""
                      className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                    />
                    <div className="flex font-bold bookings-center text-xl">
                      <span>{pend.category}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                      <h3 className="text-xl font-semibold dark:text-violet-400">
                        {" "}
                        {pend.serviceName}
                      </h3>
                    </a>
                    <p className=" dark:text-gray-400">{pend.description}</p>
                  </div>
                </div>
                <div className="flex bookings-center gap-2 mt-3">
                  <img
                    alt=""
                    className="w-12 border h-12 rounded-full ri ri dark:bg-gray-500 ri ri"
                    src={pend?.serviceProvider?.image}
                  />
                  <p className="text-md font-bold">
                    {pend?.serviceProvider?.name}
                  </p>
                </div>
                <div className="flex justify-center my-3">
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1">
                      Pending
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>In Progress</a>
                      </li>
                      <li>
                        <a>Completed</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MySchedules;
