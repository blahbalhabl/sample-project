import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Modal from "../components/Modal"
import { icons } from "../utils/icons"

const Signup = ({ setAuth }) => {
  const navigate = useNavigate(); 
  const [pass, setPass] = useState(false);
  const [inputs, setInputs] = useState({
    email: null,
    password: null,
  });
  const [passInput, setPassInput] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.email && inputs.password) {
      openModal();
    } else {
      alert('Please fill up all the fields');
    }
  };

  useEffect(() => {
    inputs?.email && setPassInput(true);
    !inputs?.email && setPassInput(false);
  }, [inputs.email])

  return (
    <div className="h-5/6 flex justify-center items-center">
      <div className="p-5 flex justify-center items-center flex-col w-3/6">
        <h3 className="text-slate-600 font-bold text-lg">
          WELCOME TO
        </h3>
        <h1 className="text-slate-700 font-extrabold text-3xl my-2">
          DHVSU MEDICAL WEBSITE
        </h1>
        <div className="flex flex-col justify-center items-center">
          <h2 className="flex flex-wrap text-slate-600 w-5/6 text-center font-bold text-xl">
            Enter your email address and get started
          </h2>
          <div className="relative mt-8">
            <span className="absolute flex items-center top-5 text-lg left-2 ml-2 text-blue-600">
              <FontAwesomeIcon icon={icons.email}/>
            </span>
            <input  
              className="border-2 border-blue-300 rounded-xl w-full p-1 pl-10 h-14 shadow-inner focus:outline-none focus:border-blue-600"
              name="email"
              placeholder="e.g. juantamad@gmail.com"
              onChange={handleChange}
              type="email" />
          </div>
          {passInput && (<div className="relative mt-4">
            <span className="absolute flex items-center top-5 text-lg left-2 ml-2 text-blue-600">
              <FontAwesomeIcon icon={pass ? icons.unlock : icons.lock}/>
            </span>
            <input  
              className="border-2 border-blue-300 rounded-xl w-full p-1 pl-10 h-14 shadow-inner focus:outline-none focus:border-blue-600"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              type={pass ? 'text' : 'password'} />
            <button
                className="absolute top-4 right-3 text-blue-600"
                onClick={() => setPass(!pass)}
                >
                <FontAwesomeIcon icon={pass ? icons.eye : icons.eyeSlash }/>
              </button>
          </div>)}
          <button 
            className="p-2 w-max px-8 m-2 mt-8 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700"
            onClick={handleSubmit}
          >
            CONTINUE
          </button>
        </div>
        <div className="flex justify-between items-center w-full mt-20">
          <div className="flex items-center pr-10 border-solid border-r-2 border-slate-300">
            <div className="p-2 m-2 mr-8 text-4xl text-blue-600">
              <FontAwesomeIcon icon={icons.calendar}/>
            </div>
            <div className="flex flex-col">
              <h2 className="font-extrabold">BOOK</h2>
              <h3 className="font-semibold text-slate-700">Easily connect with your Doctors</h3>
            </div>
          </div>
          <div className="flex items-center pr-10 border-solid border-r-2 border-slate-300">
            <div className="p-2 m-2 mr-8 text-4xl text-yellow-500">
              <FontAwesomeIcon icon={icons.comment}/>
            </div>
            <div className="flex flex-col">
              <h2 className="font-extrabold">CONSULT</h2>
              <h3 className="font-semibold text-slate-700">Visit your Doctor or consult online</h3>
            </div>
          </div>
          <div className="flex items-center">
            <div className="p-2 m-2 mr-8 text-4xl text-blue-600">
              <FontAwesomeIcon icon={icons.pills}/>
            </div>
            <div className="flex flex-col">
              <h2 className="font-extrabold">ORDER</h2>
              <h3 className="font-semibold text-slate-700">Your medicine delivered to you</h3>
            </div>
          </div>
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen}
        closeModal={closeModal}
      >
        <div className="p-2 m-2 flex flex-col items-center justify-center">
          <div className="text-yellow-500 text-7xl mb-5 p-4 rounded-full bg-slate-200">
            <FontAwesomeIcon icon={icons.doubleCheck} />
          </div>
          <h3 className="text-2xl font-bold text-slate-800">
            Verification was sent to your Email Address
          </h3>
          <p className="text-lg font-semibold text-slate-700">
            Verify check email address by visiting the link in the email.
          </p>
          <button
            className="bg-blue-600 mt-5 p-2 px-5 rounded-full text-white font-semibold text-md"
            onClick={() => navigate('/auth/login')}
          >
            Proceed to Login
          </button>
        </div>
      </Modal>
    </div>
  )
};

export default Signup