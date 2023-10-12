import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/icons";

const Header = () => {
  const location = useLocation();

  return (
    <div className=" border-b-2 flex justify-between items-center p-5">
      <h1 className="text-2xl">
        DHVSU Medical Website
      </h1>
      <ul className="flex flex-row p-2">
        {location?.pathname !== "/" && (
          <li className="m-2 p-2 text-xl text-blue-600">
            <Link to="/" >
              <FontAwesomeIcon icon={icons.home}/>
            </Link>
          </li>
        )}
        {location?.pathname !== "/auth/login" && (
          <li className="m-2 p-2 px-3 text-lg bg-blue-600 rounded-md text-white">
            <Link to="/auth/login" >Login</Link>
          </li>
        )}
        {location?.pathname !== "/auth/signup" && (
          <li className="m-2 p-2 px-3 text-lg rounded-md text-blue-600 border-2 border-blue-600">
            <Link to="/auth/signup" >Signup</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Header