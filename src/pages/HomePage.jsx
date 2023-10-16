import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../utils/icons';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import useAuth from '../hooks/useAuth';

const HomePage = () => {
  const { auth } = useAuth(); 
  const navigate = useNavigate();
  const [link, setLink] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const redirect = (link) => {
    setLink(link);
    if (!auth) {
      openModal()
    } else {
      navigate(link);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center bg-slate-200">
      <div className='flex flex-col justify-start items-start mb-20 w-3/6'>
        <div className='relative flex justify-start items-center mt-20'>
          <span className='flex flex-wrap text-5xl font-extrabold w-3/6'>
            Personalized care when and where you need it
          </span>
          <span className='absolute h-2 w-28 -bottom-2 bg-yellow-400'></span>
        </div>
        <div className='flex shadow-2xl bg-white p-10 rounded-md mt-10 text-white font-bold'>
          <div 
            onClick={() => redirect('/doctors')}
            className='flex items-center bg-blue-600 mx-2 p-5 rounded-md cursor-pointer hover:outline hover:outline-2 hover:outline-blue-600 hover:bg-white hover:text-blue-600'
          >
            <FontAwesomeIcon className='text-2xl' icon={icons.doctor} />
            <p className='mx-3'>FIND A DOCTOR</p>
            <FontAwesomeIcon icon={icons.right} />
          </div>
          <div
            onClick={() => redirect('/hospitals')}
            className='flex items-center bg-blue-600 mx-2 p-5 rounded-md cursor-pointer hover:outline hover:outline-2 hover:outline-blue-600 hover:bg-white hover:text-blue-600'
          >
            <FontAwesomeIcon className='text-2xl' icon={icons.location} />
            <p className='mx-3'>FIND A LOCATION</p>
            <FontAwesomeIcon icon={icons.right} />
          </div>
          <div
            onClick={() => redirect('/appointments')}
            className='flex items-center bg-yellow-300 mx-2 p-5 rounded-md text-blue-600 cursor-pointer hover:outline hover:outline-2 hover:outline-yellow-300 hover:bg-white'
          >
            <FontAwesomeIcon className='text-2xl' icon={icons.calendar} />
            <p className='mx-3'>SCHEDULE AN APPOINTMENT</p>
            <FontAwesomeIcon icon={icons.right} />
          </div>
        </div>
        <div className='flex flex-col flex-wrap w-5/6 mt-20 h-4/6 text-base text-slate-700 font-semibold'>
          <p className='mb-5 font-bold'>About DHVSU Medical Website</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quod quidem cupiditate esse ab veniam? Incidunt ducimus repellendus at dolore unde asperiores modi? Architecto consequatur optio blanditiis ex? Ab, sit, recusandae sequi natus sint, molestiae nesciunt totam magni sed repellat in quam aliquid quasi ipsum sapiente quas. Deserunt, unde minus?!</p>
        </div>
      </div>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
      >
        <div className='flex'>
          <Link
            className='border-solid border-r-2 border-slate-400 p-5 text-blue-600 font-bold hover:bg-blue-100'
            to="/auth/login"
            state={{ from: { pathname: link } }}
          >
            Login
          </Link>
          <Link
            className='p-5 text-yellow-400 font-bold hover:bg-yellow-100'
            to="/auth/signup"
            state={{ from: { pathname: link } }}
          >
            Create an Account
          </Link>
        </div>
      </Modal>
    </div>
  )
}

export default HomePage