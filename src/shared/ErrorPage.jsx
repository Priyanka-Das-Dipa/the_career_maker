import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="my-10">
      <div className="flex justify-center items-center">
        <img
          className="h-[700px] "
          src="https://i.ibb.co/pQxgHGW/2842748.jpg"
          alt="Error"
        />
      </div>
      <button className="flex mx-auto btn btn-warning"><Link to="/">Go Home</Link></button>
    </div>
  );
};

export default ErrorPage;
