import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/icons";
import Sidebar from "../components/Sidebar"

const Dashboard = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const userLogout = () => {
    setAuth(null);
    sessionStorage.removeItem('auth');
  };

  return (
    <div className="p-5 w-full sm:w-4/6 mx-auto">
      <div className="flex justify-start">
        <h1 className="text-3xl font-extrabold">Dashboard</h1>
      </div>
      <div className="flex justify-between bg-slate-200 w-auto p-5 my-5 rounded-xl border-solid border-1 border-sky-100 items-center sm:mr-5 sm:w-max">
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
          className="flex mx-10 mr-2 p-2 h-max bg-slate-300 rounded-md items-center  outline outline-1 outline-slate-400 hover:bg-slate-100 font-bold"
          onClick={userLogout}
          >
          <FontAwesomeIcon className="mr-2 text-xl text-blue-600" icon={icons.logout}/>
          Sign Out
        </button>
      </div>
      <div>
        <div className="flex mt-14 flex-col sm:flex-row">
          <div
            onClick={() => navigate('/appointments')}
            className="flex flex-col items-center justify-center bg-slate-200 rounded-xl p-5 hover:bg-slate-100 cursor-pointer mb-5 sm:mr-5"
          >
            <span className="text-3xl text-blue-600">
              <FontAwesomeIcon icon={icons.calendar}/>
            </span>
            <span className="text-xl font-bold my-2">
              Book an Appointment
            </span>
            <span className="text-lg text-slate-700 text-center">
              Easily connect with your Doctors
            </span>
          </div>
          <div
            onClick={() => navigate('/prescriptions')}
            className="flex flex-col items-center justify-center bg-slate-200 rounded-xl p-5 hover:bg-slate-100 cursor-pointer mb-5 sm:mr-5"
          >
            <span className="text-3xl text-blue-600">
              <FontAwesomeIcon icon={icons.pills}/>
            </span>
            <span className="text-xl font-bold my-2">
              View Prescriptions
            </span>
            <span className="text-lg text-slate-700 text-center">
              View your prescriptions from your Doctors
            </span>
          </div>
          <div
            onClick={() => navigate('/history')}
            className="flex flex-col items-center justify-center bg-slate-200 rounded-xl p-5 hover:bg-slate-100 cursor-pointer mb-5"
          >
            <span className="text-3xl text-blue-600">
              <FontAwesomeIcon icon={icons.medical}/>
            </span>
            <span className="text-xl font-bold my-2">
              View History
            </span>
            <span className="text-lg text-slate-700 text-center">
              View your medical history
            </span>
          </div>
        </div>
        <div className="flex w-full justify-between sm:justify-start">
          <div
            onClick={() => navigate('/doctors')}
            className="flex flex-col items-center justify-center bg-slate-200 rounded-xl p-5 mr-5 hover:bg-slate-100 cursor-pointer w-full sm:w-auto"
          >
            <span className="text-3xl text-blue-600">
              <FontAwesomeIcon icon={icons.doctor}/>
            </span>
            <span className="text-xl font-bold my-2">
              View Doctors
            </span>
            <span className="text-lg text-slate-700 text-center">
              View your Doctors
            </span>
          </div>
          <div
            onClick={() => navigate('/hospitals')}
            className="flex flex-col items-center justify-center bg-slate-200 rounded-xl p-5 hover:bg-slate-100 cursor-pointer w-full sm:w-auto"
          >
            <span className="text-3xl text-blue-600">
              <FontAwesomeIcon icon={icons.hospital}/>
            </span>
            <span className="text-xl font-bold my-2">
              View Hospitals
            </span>
            <span className="text-lg text-slate-700 text-center">
              View your Hospitals
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard