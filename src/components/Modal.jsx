import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../utils/icons';

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed flex justify-center items-center z-10 top-0 left-0 w-full h-full">
      <div className="flex flex-col items-end bg-white w-max h-max z-20 p-4 rounded-lg">
        <button 
          className="text-red-500 bg-pink-300 rounded-md px-2 py-1 text-xs text-center hover:bg-pink-500 hover:text-red-300 hover:font-extrabold" 
          onClick={closeModal} >
          <FontAwesomeIcon icon={icons.close} />
        </button>
        {children}
      </div>
      <div 
        onClick={closeModal} 
        className="fixed top-0 left-0 bg-gray-300 bg-opacity-50 w-full h-full shadow-lg cursor-pointer">
      </div>
    </div>
  );
};

export default Modal