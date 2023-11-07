import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

const GoogleLogin = () => {
  const { user, googleLogin } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const location = useLocation()
  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        console.log(res);
        toast.success('User logged in successfully');
        navigate(location?.state ? location.state : "/")
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.message)
      });
  };
  return (
    <div>
      <div className="divider text-white">continue with</div>
      <div className="flex justify-around">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn text-orange-400 btn-circle"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
