import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  console.log(detailData);
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetailData(data);
        console.log(data);
      });
  }, [id]);

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
              <p className="leadi text-black">{detailData.description}</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                className="w-12 border h-12 rounded-full ri ri dark:bg-blue-600 ri ri"
                src={detailData.serviceProvider?.image}
                alt=""
              />
              <h1 className="text-xl font-bold">
                {detailData.serviceProvider?.name}
              </h1>
            </div>
          </div>
          <div className="my-5">
            <Link>
              <button className="btn w-full btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
