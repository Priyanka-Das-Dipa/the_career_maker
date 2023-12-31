import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const AddServices = () => {
    const notify = () => toast.success('Successfully added a service');
  const { user } = useContext(AuthContext);
  const userName = user.displayName;
  const userImage = user.photoURL;
  const sellerEmail = user.email;
  console.log(userName, userImage);
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const area = form.area.value;
    const location = form.location.value;
    const category = form.category.value;
    const serviceImage = form.serviceImage.value;
    const serviceProvider = {
      name: user.displayName,
      email: user.email,
      image: user.photoURL  
    }
    const price = form.price.value;
    const description = form.description.value;
    const newService = {
      userImage,
      sellerEmail,
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
    console.log(newService);

    fetch("https://the-career-maker-server-eight.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="p-24">
        <h2 className="text-5xl text-center font-extrabold">Add A Service</h2>
        <form onSubmit={handleAddService}>
          <div className="lg:p-24 ">
            {/* form name and quantity row */}
            <div className="md:flex justify-center gap-5">
              <div className="form-control w-full max-w-xs md:w-1/2">
                <label className="label">
                  <span className="label-text">Service Name:</span>
                </label>
                <input
                  type="text"
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
                  value={userImage}
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
                  value={userName}
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
                  
                  placeholder="location"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>

            {/* Photo Url row */}
            <div className="md:flex justify-center gap-5">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Description:</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="input input-bordered  w-1/2"
                />
              </div>
              <div className="form-control w-full max-w-xs md:w-1/2">
                <label className="label">
                  <span className="label-text">Seller Email:</span>
                </label>
                <input
                  type="email"
                  name="name"
                  value={sellerEmail}
                  placeholder="email"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <input
              onClick={notify}
                type="submit"
                value="Add Service"
                className="btn mt-10 btn-accent btn-wide "
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
