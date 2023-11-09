import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ManageService = () => {
  const { id } = useParams();
  const [addServices, setAddServices] = useState();
  useEffect(() => {
    fetch("https://the-career-maker-server-eight.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setAddServices(data));
  }, []);

  const handleDelete = (serviceId) => {
    console.log("this the deleted button", serviceId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://the-career-maker-server-eight.vercel.app/services/${serviceId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("this is the data", data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-10">
      {addServices?.map((addService) => (
        <div
          key={addService._id}
          className="w-full p-4 rounded-3xl border mb-10 shadow-md dark:bg-gray-900 dark:text-gray-100"
        >
          <div className="space-y-4 flex gap-10">
            <div className="space-y-2">
              <img
                src={addService.serviceImage}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="flex font-bold items-center text-xl">
                <span>{addService.category}</span>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex justify-between"
                >
                  <h3 className="text-xl font-semibold dark:text-violet-400">
                    {addService.serviceName}
                  </h3>
                  <h3 className="text-xl font-semibold dark:text-violet-400">
                    <span className="text-accent">Location:</span>
                    {addService.location}
                  </h3>
                </a>
                <p className=" dark:text-gray-400">{addService.description}</p>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <img
                  alt=""
                  className="w-12 border h-12 rounded-full ri ri dark:bg-gray-500 ri ri"
                  src={addService.serviceProvider?.image}
                />
                <p className="text-md font-bold">
                  {addService.serviceProvider?.name}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-10 justify-end my-3">
            <Link to={`/update/${addService._id}`}>
              <button className="btn btn-sm btn-accent">Update</button>
            </Link>
            <Link>
              {/* to={`/manageService/${addService._id}`} */}
              <button
                onClick={() => handleDelete(addService._id)}
                className="btn btn-sm btn-accent"
              >
                Delete
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
