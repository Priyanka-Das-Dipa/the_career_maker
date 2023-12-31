import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Update = () => {
  const product = useLoaderData();
  const {
    _id,
    serviceImage,
    category,
    serviceName,

    description,
    location,
    name,
    area,
    price,
    image,
  } = product;
  const notify = () => toast.success("Successfully added a service");
  const { user } = useContext(AuthContext);
  const userName = user.displayName;
  const userImage = user.photoURL;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const area = form.area.value;
    const location = form.location.value;
    const category = form.category.value;
    const serviceImage = form.serviceImage.value;
    const serviceProvider = {
      name: form.name.value,
      image: form.image.value,
    };
    const price = form.price.value;
    const description = form.description.value;
    const updateService = {
      userImage,
      serviceProvider,
      userName,
      serviceName,
      area,
      category,
      location,
      serviceImage,
      price,

      description,
    };
    console.log(updateService);

    fetch(`https://the-career-maker-server-eight.vercel.app/services/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateService),
    })
      .then((res) => res.json())
      .then((data) =>{ 
        if(data.modifiedCount > 1){
            Swal.fire({
                title: 'Success',
                text: 'Updated',
                icon: 'success',
                confirmButtonText: 'DONE'
            })
        }
        console.log(data)
    });
  };

  return (
    <>
      <div className="p-24">
        <h2 className="text-5xl text-center font-extrabold">
          Update A Service
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="lg:p-24 ">
            {/* form name and quantity row */}
            <div className="md:flex justify-center gap-5">
              <div className="form-control w-full max-w-xs md:w-1/2">
                <label className="label">
                  <span className="label-text">Service Name:</span>
                </label>
                <input
                  type="text"
                  defaultValue={serviceName}
                  name="serviceName"
                  placeholder="Service Name"
                  className="input input-bordered max-w-xs w-full"
                />
              </div>
              <div className="form-control w-full max-w-xs md:w-1/2">
                <label className="label">
                  <span className="label-text">Service Area:</span>
                </label>
                <input
                  type="text"
                  name="area"
                  defaultValue={area}
                  placeholder="Service Area"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            {/* form supplier and taste row */}
            <div className="md:flex justify-center gap-5">
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="label-text">Service Photo Url:</span>
                </label>
                <input
                  type="text"
                  defaultValue={serviceImage}
                  name="serviceImage"
                  placeholder="Service Photo Url"
                  className="input input-bordered max-w-xs w-full"
                />
              </div>
              <div className="form-control w-full max-w-xs md:w-1/2">
                <label className="label">
                  <span className="label-text">Price:</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Price"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            {/* user name and image from firebase */}
            <div className="md:flex justify-center gap-5">
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="label-text">User Photo Url:</span>
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={userImage}
                  placeholder="User Photo Url"
                  className="input input-bordered max-w-xs w-full"
                />
              </div>
              <div className="form-control w-full max-w-xs md:w-1/2">
                <label className="label">
                  <span className="label-text">User Name:</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={userName}
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="md:flex justify-center gap-5">
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="label-text">Category:</span>
                </label>
                <input
                  type="text"
                  defaultValue={category}
                  name="category"
                  placeholder="Category"
                  className="input input-bordered max-w-xs w-full"
                />
              </div>
              <div className="form-control w-full max-w-xs md:w-1/2">
                <label className="label">
                  <span className="label-text">Location:</span>
                </label>
                <input
                  type="text"
                  name="location"
                  defaultValue={location}
                  placeholder="location"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>

            {/* Photo Url row */}
            <div className="md:flex justify-center">
              <div className="form-control w-full max-w-2xl">
                <label className="label">
                  <span className="label-text">Description:</span>
                </label>
                <input
                  type="text"
                  name="description"
                  defaultValue={description}
                  placeholder="Description"
                  className="input input-bordered  w-full"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input
                onClick={notify}
                type="submit"
                value="Update Service"
                className="btn mt-10 btn-accent btn-wide "
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );

  //   <div>this is update: {serviceName}</div>;
};

export default Update;
