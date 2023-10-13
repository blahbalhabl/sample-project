import { useState } from "react"
import { useNavigate, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../utils/icons";
import Footer from "../components/Footer"

const LoginPage = ({ setAuth }) => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || '/dashboard';
  const [pass, setPass] = useState(false);
  const [remember, setRemember] = useState(
    JSON.parse(localStorage.getItem('remember')) || false
  );
  const [inputs, setInputs] = useState({
    email: null,
    password: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputs.email && inputs.password) {
      if (remember) {
        // Save email and password in local storage
        localStorage.setItem('remember', remember);
        localStorage.setItem('email', inputs.email);
        localStorage.setItem('password', inputs.password);
      }

      setAuth(inputs.email);
      navigate(from, { replace: true });
    } else {
      alert('Please fill up all the fields');
    }
  };

  console.log(from)

  return (
    <div className="h-full">
      <div className="flex justify-center flex-col items-center bg-slate-200 h-full">
        <div className="flex items-center flex-col h-max w-1/4 p-5 rounded-lg bg-white text-">
          <span className="text-xl text-yellow-300 font-extrabold">
            WELCOME BACK
          </span>
          <span className="text-6xl text-blue-600 my-5">
            <FontAwesomeIcon icon={icons.pills}/>
          </span>
          <span className="text-2xl font-semibold">
            Sign In to Your Account
          </span>
          <div className="relative flex flex-col w-full">
            <label className="text-base font-semibold text-slate-700 mt-9">Email Address</label>
            <div className="relative w-full">
              <span className="absolute top-4 left-4 text-blue-600 ">
                <FontAwesomeIcon icon={icons.email} />
              </span>
              <input 
                className="border-2 border-blue-300 rounded-xl w-full p-1 px-10 focus:outline-none focus:border-blue-600 h-14 shadow-inner"
                name="email"
                onChange={handleChange}
                placeholder="e.g. juantamad@gmail.com"
                type="email"
                required />
            </div>
            <label className="text-base font-semibold text-slate-700 mt-9">Password</label>
            <div className="relative w-full">
              <span className="absolute top-4 left-4 text-blue-600">
                <FontAwesomeIcon icon={pass ? icons.unlock : icons.lock} />
              </span>
              <input 
                className="border-2 border-blue-300 rounded-xl w-full p-1 px-10 focus:outline-none focus:border-blue-600 h-14 shadow-inner" 
                name="password"
                onChange={handleChange}
                type={pass ? 'text' : 'password'} 
                required />
              <button
                className="absolute top-4 right-5 text-blue-600"
                onClick={() => setPass(!pass)}
                >
                <FontAwesomeIcon icon={pass ? icons.eye : icons.eyeSlash }/>
              </button>
            </div>
          </div>
          <div className="p-1 mt-2 w-full flex justify-between">
            <div>
              <input
                className="mr-2"
                onChange={() => setRemember(!remember)}
                type="checkbox" />
              <label>Remember me</label>
            </div>
            <span className="text-blue-600 cursor-pointer hover:text-blue-700 underline decoration-dotted">Forgot Password?</span>
          </div>
          <button 
            className="w-full p-2 m-2 my-10 rounded-xl text-lg text-blue-600 bg-yellow-300 border-solid border-2 border-blue-600 border-b-4 shadow-inner hover:bg-yellow-400"
            onClick={handleLogin}
          >
            <span className="mr-5 font-bold">
              Sign In
            </span>
            <FontAwesomeIcon icon={icons.login}/>
          </button>
        </div>
        <span className="flex my-5">
          <p className="mr-5">Don't have an account?</p>
          <Link className="text-blue-600 cursor-pointer hover:text-blue-700 underline decoration-dotted" to={'/auth/signup'} >Sign up now!</Link>
        </span>
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage