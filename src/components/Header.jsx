import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/icons";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { auth, setAuth } = useAuth();
  const location = useLocation();

  const userLogout = () => {
    setAuth(null);
    sessionStorage.removeItem('auth');
  };

  useEffect(() => {
    const auth = sessionStorage.getItem('auth');
    auth ? setAuth(auth) : setAuth(null);
  }, []);

  return (
    <div className="flex justify-between items-center p-2 px-20 border-b-2">
      <div className="relative group m-2 p-2 text-xl text-blue-600 rounded-md hover:text-blue-700">
        <Link to={ auth ? '/dashboard' : '/'} >
          <FontAwesomeIcon icon={icons.home}/>
        </Link>
        <span className="opacity-0 group-hover:opacity-100 absolute top-2.5 left-20 transform -translate-x-1/2 bg-black text-sm text-white px-2 py-1 rounded-md transition-opacity duration-300">
          { auth ? 'Dashboard' : 'Home' }
        </span>
      </div>
      <span className="flex justify-center items-center">
        <FontAwesomeIcon className="text-3xl text-blue-600" icon={icons.pills}/>
        <h1 className="text-2xl ml-5">
          DHVSU Medical Website
        </h1>
      </span>
      {(!auth && location?.pathname !== "/auth/login") && (
        <div className="relative group cursor-pointer m-2 p-2 px-3 text-2xl rounded-md text-blue-600 hover:text-blue-700">
          <Link to="/auth/login" >
            <FontAwesomeIcon icon={icons.login} />
          </Link>
          <span className="opacity-0 group-hover:opacity-100 absolute top-2.5 right-5 transform -translate-x-1/2 bg-black text-sm text-white px-2 py-1 rounded-md transition-opacity duration-300">
            Login
          </span>
        </div>
      )}
      { auth && (
        <div className="flex h-full items-center">
          <div className="fixed bg-slate-300 rounded-full right-40 p-1 px-3 text-2xl">
            <p>
              {auth.charAt(0).toUpperCase()}
            </p>
          </div>
          <div
            className="relative group cursor-pointer m-2 p-2 px-3 text-2xl rounded-md text-blue-600 hover:text-blue-700"
            onClick={userLogout}
            >
            <Link to="/" >
              <FontAwesomeIcon icon={icons.logout} />
            </Link>
            <span className="opacity-0 group-hover:opacity-100 absolute top-2.5 right-5 transform -translate-x-1/2 bg-black text-sm text-white px-2 py-1 rounded-md transition-opacity duration-300">
              Logout
            </span>
          </div>
        </div>
      )}
      {location?.pathname === "/auth/login" && (
        <div className="relative group cursor-pointer m-2 p-2 px-3 text-2xl rounded-md text-blue-600 hover:text-blue-700">
          <Link to="/contact-support" >
            <FontAwesomeIcon icon={icons.support} />
          </Link>
          <span className="opacity-0 group-hover:opacity-100 absolute top-2.5 right-5 transform -translate-x-1/2 bg-black text-sm text-white px-2 py-1 rounded-md transition-opacity duration-300">
            Support
          </span>
        </div>
      )}
    </div>
  )
}

export default Header