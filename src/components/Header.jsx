import useAuth from "../hooks/useAuth";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/icons";
import { useEffect, useState } from "react";

const Header = () => {
  const { auth, setAuth } = useAuth();
  const [dropDown, setDropDown] = useState('hidden');
  const location = useLocation();

  const userLogout = () => {
    setAuth(null);
    sessionStorage.removeItem('auth');
  };

  const dropDownMenu = () => {
    dropDown === 'hidden' ?
    setDropDown('sticky') :
    setDropDown('hidden')
  };

  useEffect(() => {
    const auth = sessionStorage.getItem('auth');
    auth ? setAuth(auth) : setAuth(null);
  }, []);

  return (
    <>
    <div className="relative flex justify-between items-center p-2 border-b-2 sm:px-20">
      <div className="relative group m-2 p-2 text-xl text-blue-600 rounded-md hover:text-blue-700 hidden sm:flex">
        <Link to={ auth ? '/dashboard' : '/'} >
          <FontAwesomeIcon icon={icons.home}/>
        </Link>
        <span className="opacity-0 group-hover:opacity-100 absolute top-2.5 left-20 transform -translate-x-1/2 bg-black text-sm text-white px-2 py-1 rounded-md transition-opacity duration-300">
          { auth ? 'Dashboard' : 'Home' }
        </span>
      </div>
      <span
        onClick={() => dropDownMenu()}
        className="text-lg text-blue-600 p-2 sm:hidden"
      >
        <FontAwesomeIcon icon={icons.burger} />
      </span>
      <span className="flex justify-center items-center">
        <FontAwesomeIcon className="text-3xl text-blue-600" icon={icons.pills}/>
        <h1 className="text-2xl ml-5">
          DHVSU Medical Website
        </h1>
      </span>
      {(!auth && location?.pathname !== "/auth/login") && (
        <div className="relative group cursor-pointer m-2 p-2 px-3 text-2xl rounded-md text-blue-600 hover:text-blue-700 hidden sm:flex">
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
          <div className="relative bg-slate-300 rounded-full right-5 p-1 px-3 text-2xl hidden sm:flex">
            <p>
              {auth.charAt(0).toUpperCase()}
            </p>
          </div>
          <div className="relative group cursor-pointer m-2 p-2 px-3 text-2xl rounded-md text-blue-600 hover:text-blue-700">
            <span onClick={userLogout}>
              <FontAwesomeIcon icon={icons.logout} />
            </span>
            <span className="opacity-0 group-hover:opacity-100 absolute top-2.5 right-5 transform -translate-x-1/2 bg-black text-sm text-white px-2 py-1 rounded-md transition-opacity duration-300">
              Logout
            </span>
          </div>
        </div>
      )}
      {location?.pathname === "/auth/login" && (
        <div className="relative group cursor-pointer m-2 p-2 px-3 text-2xl rounded-md text-blue-600 hover:text-blue-700 hidden sm:flex">
          <Link to="/contact-support" >
            <FontAwesomeIcon icon={icons.support} />
          </Link>
          <span className="opacity-0 group-hover:opacity-100 absolute top-2.5 right-5 transform -translate-x-1/2 bg-black text-sm text-white px-2 py-1 rounded-md transition-opacity duration-300">
            Support
          </span>
        </div>
      )}
    </div>
    <div className={`${dropDown} bg-blue-500 w-full p-2 text-white sm:hidden`}>
      <Link to={ auth ? '/profile' : '/auth/signup' }>
        { auth ? (
          <div className="flex items-center border-b border-slate-300 border-opacity-50 p-2">
              <FontAwesomeIcon className="mr-3" icon={icons.profile}/>
            <p>Profile</p>
          </div>
        ) : (
          <div className="flex items-center">
              <FontAwesomeIcon className="mr-3" icon={icons.login}/>
            <p>Login</p>
          </div>
        )}
      </Link>
      <Link to={ auth ? '/dashboard' : '/'} >
        <div className="p-2">
          <FontAwesomeIcon className="mr-2" icon={icons.home}/>
          { auth ? 'Dashboard' : 'Home'}
        </div>
      </Link>
    </div>
    </>
  )
}

export default Header