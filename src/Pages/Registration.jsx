import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Registration = () => {
  const navigate = useNavigate()
  const {createUser, handleUpdateProfile } = useContext(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const img = e.target.img.value;
    console.log(name, email, password, img)
    if(password.length < 6){
      toast.error("Password must be at least 6 character!")
      return
    }
    createUser(email, password)
      .then(res=>{
        console.log(res)
        handleUpdateProfile(name, img)
                    .then(() => {
                        toast.success('User created successfully');
                        navigate('/')

                    })
      })
      .catch(error => {
        console.log(error)
      })
    
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl mb-10 font-bold">Register now!</h1>
          
        </div>
        <div className="card w-screen max-w-xl shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body p-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                type="text"
                placeholder="image url"
                className="input input-bordered"
                name="img"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control mt-6 p-0">
              <button className="btn btn-neutral" type="submit">
                Register
              </button>
            </div>
            <label className="text-xl mt-5 font-medium font-serif">
              Have an account? Please {" "}
              <Link to="/login" className="label-text-alt link link-hover">
                <span className="text-xl font-medium text-blue-500"> Login</span>
              </Link>
            </label>
            <GoogleLogin></GoogleLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
