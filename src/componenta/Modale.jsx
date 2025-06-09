import { Modal, ModalBody } from 'flowbite-react';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Modale({ skip, open, onClose }) {
   const navigate = useNavigate();
    const {goToNextStep,goToPrevSteps} = useContext(AppContext);
  if (!skip) return null; // sécurité

  const nextSteps=()=>{
    goToNextStep()
    onClose()
    navigate('/permit-check')

  }
  const prevSteps = () =>{
    goToPrevSteps()
    onClose()
      navigate('/waste-type')
   // navigate('permit-check')

  }

  return (
    <Modal show={open} size="md" onClose={onClose} popup>
      <ModalBody style={{backgroundColor:'white!important'}}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{skip.size} Yard Skip</h2>
          <p className="text-sm text-gray-600 mb-4">
            Imagery and information shown throughout this website may not reflect the exact shape or size specification.
          </p>
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-semibold ">£{skip.price_before_vat}</span>
            <span className="text-gray-700">{skip.hire_period_days} day hire</span>
          </div>
          <div className="grid gap-2">
            <button
              onClick={nextSteps}
              className="bg-blue-600 text-white hover:bg-blue-900 transition-colors duration-300 px-4 py-2 rounded"
            >
              Continue
            </button>
            <button
              onClick={prevSteps}
              className="px-4 py-2 bg-gray-200 text-gray-700  hover:bg-gray-100 transition-colors duration-300 rounded w-full"
            >
              Back
            </button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}
