import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import {FaGoogle} from 'react-icons/fa'


const GoogleLogin = () => {
    const {user, googleLogin} = useContext(AuthContext)
    console.log(user)
    const navigate = useNavigate()
    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                console.log(res)
                // toast.success('User logged in successfully');
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                // toast.error(error.message)
            })
    }
    return (
        <div>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn text-orange-400 btn-circle">
                        <FaGoogle></FaGoogle>
                    </button>
                <button
                    onClick={() => handleSocialLogin()}
                    className="btn btn-neutral btn-sm">Github</button>

            </div>
            
        </div>
    );
};

export default GoogleLogin;