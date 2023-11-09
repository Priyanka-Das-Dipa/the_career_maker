import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ServiceDetails = () => {
  const {user} = useContext(AuthContext);
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(detailData);
  const notify = () => toast.success('Successfully added to the My Schedule route');
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    fetch(`https://the-career-maker-server-eight.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetailData(data);
        console.log(data);
      });
  }, [id]);

  const handleBooking = (e) => {
    const newBooking = {
      serviceName: detailData.serviceName,
      serviceImage: detailData.serviceImage,
      category: detailData.category,
      price: detailData.price,
      description: detailData.description,
      serviceProvider: detailData.serviceProvider,
      buyerEmail: user.email
      // Add additional data as needed
    };
    console.log(newBooking);
    fetch("https://the-career-maker-server-eight.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div className="max-w-[1200px] mx-auto flex justify-center items-center mt-10">
        <div key={id} className="w-full p-4 shadow-md  text-black">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={detailData.serviceImage}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
              />
              <div className="flex items-center text-xl font-medium">
                <span>{detailData.category}</span>
              </div>
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <div className="flex justify-between">
                  <h3 className="text-xl font-semibold text-violet-700">
                    {detailData.serviceName}
                  </h3>
                  <h3 className="text-xl font-semibold text-violet-700">
                    {detailData.price}
                  </h3>
                </div>
              </a>
              <p className=" text-black">{detailData.description}</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                className="w-12 border h-12 rounded-full ri ri dark:bg-blue-600 ri ri"
                src={user?.image}
                alt=""
              />
              <h1 className="text-xl font-bold">
                {user?.name}
              </h1>
            </div>
          </div>
          <div className="my-5">
            <Link>
              <button
                onClick={() => {
                  openModal();
                  handleBooking();
                }}
                // onClick={openModal, handleBooking}
                className="btn w-full btn-primary"
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="flex flex-col max-w-md gap-2 p-6 text-white
             rounded-md shadow-md bg-purple-500 dark:text-gray-100"
            >
              <h2 className="flex items-center gap-2 text-xl font-semibold leadi tracki">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6 fill-current shrink-0 dark:text-violet-400"
                >
                  <path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z"></path>
                  <rect width="32" height="136" x="240" y="112"></rect>
                  <rect width="32" height="32" x="240" y="280"></rect>
                </svg>
                Are You sure went to BOOK this?
              </h2>
              <p className="flex-1 dark:text-gray-400">
                <strong>Service Name:</strong> {detailData.serviceName}
                <br />
                <strong>Service Image:</strong>{" "}
                <img
                  src={detailData.serviceImage}
                  alt=""
                  className="w-16 h-16 object-cover"
                />
                <br />
                <strong>Service Provider Email:</strong>{" "}
                {detailData.serviceProvider?.email}
                <br />
                <strong>User Email: {user?.email}</strong>
                {/* //Add user email here */}
                <br />
                <strong>Service Taking Date:</strong>{" "}
                <input
                  className="text-black w-full"
                  type="date"
                  // value={detailData.serviceTakingDate}
                  // onChange={(e) => {}}
                />
                <br />
                <strong>Special Instruction:</strong>{" "}
                <input
                  type="text"
                  className="text-black w-full"
                  // value={detailData.specialInstruction}
                  // onChange={(e) => {}}
                />
              </p>
              <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
                <button
                onClick={() => {
                  notify();
                  closeModal();
                }}
                
                  className="px-6 btn py-2 rounded-2xl shadow-sm dark:bg-violet-400 dark:text-gray-900"
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceDetails;
