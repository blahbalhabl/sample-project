import useAuth from "../hooks/useAuth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/icons";
import Sidebar from "../components/Sidebar"

const Dashboard = () => {
  const { auth, setAuth } = useAuth();

  const userLogout = () => {
    setAuth(null);
    sessionStorage.removeItem('auth');
  };

  return (
    <div className="p-5 w-4/6 mx-auto">
      <div className="flex justify-start">
        <h1 className="text-3xl font-extrabold">Dashboard</h1>
      </div>
      <div className="flex bg-slate-200 w-max p-5 my-5 rounded-xl border-solid border-1 border-sky-100 items-center">
          <div className="bg-slate-300 rounded-full p-1 px-3 m-2 mr-5 text-2xl w-max">
            <p>
              {auth.charAt(0).toUpperCase()}
            </p>
          </div>
          <div>
            <span className=" text-xl font-bold">Welcome</span>
            <p className="text-lg text-slate-700">{auth}</p>
          </div>
          <button 
            className=" flex mx-10 mr-2 p-2 h-max bg-slate-300 rounded-md items-center  outline outline-1 outline-slate-400 hover:bg-slate-100 font-bold"
            onClick={userLogout}
            >
            <FontAwesomeIcon className="mr-2 text-xl text-blue-600" icon={icons.logout}/>
            Sign Out
          </button>
      </div>
    </div>
  )
}

export default Dashboard