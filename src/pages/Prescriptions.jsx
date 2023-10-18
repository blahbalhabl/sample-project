import { useState } from 'react';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { drugData } from '../utils/drugData';
import { doctors } from '../utils/doctors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../utils/icons';

const Prescriptions = () => {
  const [selected, setSelected] = useState(null);
  const [photo, setPhoto] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClick = (drug) => {
    // setSelected value to the value of the clicked drug
    openModal();
    setSelected(drug);
  }

  const changePhoto = (current, direction) => {
    // check if the photo being rendered is the final one in the array
    if (current === selected.photos.length - 1) {
      current = 0;
      setPhoto(current);
    } else if (current === 0 && direction === 'left') {
      // check if the photo being rendered is the first one and if the user clicked left, go back to the final one in array
      current = selected.photos.length - 1;
      setPhoto(current);
    } else {
      // if all condition returns false, proceed with normal actions, change photo in array values
      direction === 'left' ? setPhoto(current-1) : setPhoto(current+1);
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <span className='w-5/6 mb-10 p-5'>
        <h1 className='font-extrabold text-2xl mt-8'>Prescriptions</h1>
        <p>Prescribed by: {doctors.position}, {doctors.name}</p>
      </span>
      <div className='flex justify-center items-center w-5/6 flex-wrap'>
        {/* map all drug prescriptions */}
        {drugData.map((drug, i) => (
          <div 
            key={i}
            className='flex flex-col justify-start rounded-lg shadow-xl w-full mb-10 sm:w-60'
          >
            <img src={drug.photos[0]} alt={drug.name} />
            <span className='p-5 flex flex-col gap-2'>
              <p className='font-bold'>{drug.name}, {drug.for}, {drug.mode}</p>
              <p className='text-slate-700 font-base'><FontAwesomeIcon icon={icons.peso}/>{drug.price}</p>
              <p>{drug.company}</p>
              <button 
                onClick={() => handleClick(drug)} 
                className='text-white mx-auto p-2 rounded-md cursor-pointer bg-blue-600 hover:outline hover:outline-2 hover:outline-blue-600 hover:bg-transparent hover:text-black'
              >
                View Details
              </button>
            </span>
        </div>
        ))}
      </div>
      <Footer />
      <Modal 
        isOpen={isModalOpen}
        closeModal={closeModal}
      >
        {/* if there is a selected drug, get all necessary data and visualize in web modal */}
        { selected ? (
          <div className='flex flex-col p-2 overflow-y-auto'>
            <div className='flex items-center flex-col w-full sm:flex-row'>
              <div className="relative outline outline-1 outline-slate-200 rounded-lg h-max w-full mb-5 sm:w-2/6 sm:mb-0">
                <img className='rounded-lg h-full w-auto object-contain' src={selected.photos[photo]} alt={selected.name} />
                <span 
                  onClick={() => changePhoto(photo, 'right')}
                  className='absolute right-0 top-1/2 p-2 bg-slate-200 bg-opacity-70'>
                  <FontAwesomeIcon icon={icons.right}/>
                </span>
                <span 
                  onClick={() => changePhoto(photo, 'left')}
                  className='absolute left-0 top-1/2 p-2 bg-slate-200 bg-opacity-70'>
                  <FontAwesomeIcon icon={icons.left}/>
                </span>
              </div>
              <div className='outline outline-1 outline-slate-200 rounded-lg p-5 w-full h-full sm:ml-5'>
                <p className='font-light text-slate-700'>
                  ({selected.company})
                </p>
                <h2 className='font-extrabold text-3xl w-max'>
                  ({selected.quantity}x) {selected.name} ({selected.dosage})
                </h2>
                <p className='text-2xl text-slate-800 w-max mb-2'>
                  {selected.type}
                </p>
                <p className='font-bold text-3xl'>
                  <FontAwesomeIcon icon={icons.peso} /> {selected.price}
                </p>
                <p>
                  Take: {selected.frequency}
                </p>
                <p>
                  Every: {selected.interval}
                </p>
                <p>
                  For: {selected.duration}
                </p>
                <button
                  className='group bg-blue-500 p-2 text-white font-bold rounded-md mt-5 hover:outline hover:outline-2 hover:outline-blue-500 hover:bg-transparent hover:text-black'>
                  e-Prescription <FontAwesomeIcon className='text-yellow-300 ml-2 group-hover:text-blue-500' icon={icons.download}/>
                </button>
              </div>
            </div>
              <div className='my-5 p-5 outline outline-1 outline-slate-200 rounded-lg bg-slate-100'>
                <h3 className='font-bold mb-5'>Product Description:</h3>
                <p>{selected.description}</p>
              </div>
              <div className='my-5 p-5 outline outline-1 outline-slate-200 rounded-lg bg-slate-100'>
                <h3 className='font-bold mb-5'>Possible Side-Effects:</h3>
                <ul>
                  { selected?.sideEffects.map((side, i) => (
                    <li key={i}>{side}</li>
                  )) || (<li>N/A</li>)}
                </ul>
              </div>
          </div>
        ) 
        : 
        (
          'No Selected Drug'
        )}
      </Modal>
    </div>
  ) 
}

export default Prescriptions