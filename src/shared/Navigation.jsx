import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className={({ isActive}) => isActive ? "active" : ""}
                  to="/"
                >
                  <span className="text-xl font-semibold">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                className={({ isActive}) => isActive ? "active" : ""}
                to="service"><span className="text-xl font-semibold">  Services</span></NavLink>
              </li>

              <li>
                <a className="text-xl font-semibold">Dashboard</a>
                <ul className="p-2">
                  <li>
                    <NavLink
                    className={({ isActive}) => isActive ? "active" : ""}
                    to="myServices"><span className="text-xl font-semibold">My Service</span></NavLink>
                  </li>
                  <li>
                    <NavLink 
                    className={({ isActive}) => isActive ? "active" : ""}
                    to="addServices"><span className="text-xl font-semibold">Add Service</span>  </NavLink>
                  </li>
                  <li>
                    <NavLink 
                    className={({ isActive}) => isActive ? "active" : ""}
                    to="mySchedule"><span className="text-xl font-semibold"> My Schedule</span>  </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <NavLink to="/" className=" normal-case text-2xl font-bold">The Career Maker</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink 
              className={({ isActive}) => isActive ? "active" : ""}
              to="/"> <span className="text-xl font-semibold">Home</span></NavLink>
            </li>
            <li>
              <NavLink 
              className={({ isActive}) => isActive ? "active" : ""}
              to="service"><span className="text-xl font-semibold">  Services</span></NavLink>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="text-xl font-semibold"> Dashboard</summary>
                <ul className="p-2">
                  <li className="">
                    <NavLink  
                    className={({ isActive}) => isActive ? "active" : ""}
                    to="myServices"> <span className="text-lg font-semibold">My Service</span></NavLink>
                  </li>
                  <li>
                    <NavLink 
                    className={({ isActive}) => isActive ? "active" : ""}
                    to="addServices"> <span className="text-lg font-semibold">Add Service</span> </NavLink>
                  </li>
                  <li>
                    <NavLink 
                    className={({ isActive}) => isActive ? "active" : ""}
                    to="mySchedule"><span className="text-lg font-semibold"> My Schedule</span>  </NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <button className="btn btn-sm  btn-ghost" onClick={logOut}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
