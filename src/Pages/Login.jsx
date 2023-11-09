import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    if (password.length < 6) {
      toast.error("Password must be at least 6 character!");
      return;
    }

    signIn(email, password)
      .then((res) => {
        console.log(res);
        toast.success("User created successfully");
        navigate(location?.state ? location.state : "/");
        // axios
        //   .post("https://the-career-maker-server-eight.vercel.app/jwt", user, { withCredentials: true })
        //   .then((res) => {
        //     console.log(res.data);
        //     if (res.data.success) {
        //       navigate(location?.state ? location.state : "/");
        //     }
        //   });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen background-image  ">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold mb-10">Login now!</h1>
          </div>
          <div className="card w-screen max-w-xl shadow-2xl ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
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
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="text-white label-text-alt link link-hover hover:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control p-0">
                <button type="submit" className="btn btn-accent">
                  Login
                </button>
              </div>
              <label className="text-xl mt-5 font-medium font-serif">
                Do not have an account? Please
                <Link to="/register" className="label-text-alt link link-hover">
                  <span className="text-xl font-medium text-green-900">
                    {" "}
                    Register
                  </span>
                </Link>
              </label>
              <GoogleLogin></GoogleLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
