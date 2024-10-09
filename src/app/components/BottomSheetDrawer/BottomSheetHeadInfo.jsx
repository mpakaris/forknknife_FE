import { useState } from 'react';
import { FaGlobe, FaHeart, FaMapMarkerAlt, FaPhone, FaRegHeart, FaShareAlt } from 'react-icons/fa';
// import ModalTemplate from '../Modal/ModalTemplate';
import BottomSheetTagPills from './BottomSheetTagPills';

export default function BottomSheetHeadInfo({ selectedLocation, handleShare }) {
  const [isFavorite, setIsFavorite] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // const handleShare = () => {
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  // const handleConfirmModal = () => {
  //   setModalScreen('invitation_location');
  //   setShowModal(false);
  // };

  return (
    <div className="pills space-y-2">
      {/* {JSON.stringify(selectedLocation)} */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-4xl font-bold text-gray-200 mb-6">{selectedLocation.name}</h1>
        <div className="flex items-center space-x-3">
          <button onClick={handleShare}>
            <FaShareAlt className="text-gray-200 text-2xl" />
          </button>
          <button onClick={toggleFavorite}>
            {isFavorite ? (
              <FaHeart className="text-red-600 text-2xl" />
            ) : (
              <FaRegHeart className="text-gray-200 text-2xl" />
            )}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 text-white p-4">
      
      {/* Address Row */}
      <div className="col-span-1 flex justify-center">
        <FaMapMarkerAlt className="text-gray-200 text-2xl" />
      </div>
      <div className="col-span-11">
        <span className="text-gray-300">{selectedLocation.address}</span>
      </div>

      {/* Phone Row */}
      <div className="col-span-1 flex justify-center">
        <FaPhone className="text-gray-200 text-2xl" />
      </div>
      <div className="col-span-11">
        <span className="text-gray-200">{selectedLocation.phone}</span>
      </div>

      {/* Website Row */}
      <div className="col-span-1 flex justify-center">
        <FaGlobe className="text-gray-200 text-2xl" />
      </div>
      <div className="col-span-11">
        <a
          href={selectedLocation.url}
          className="text-gray-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {selectedLocation.url}
        </a>
      </div>
    </div>

     <div className='mt-4'>
      <BottomSheetTagPills tags={selectedLocation.tags} />
     </div>

      {/* <ModalTemplate
        show={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
      >
        <div className="flex">
          <div className="w-1/3 flex items-center justify-center">
            <Image
              src="/images/bro_invitation.png"
              alt="Restaurant Preview"
              className="rounded-sm w-full h-auto object-cover"
              width={200}
              height={200}
            />
          </div>
          <div className="w-2/3 flex items-center pl-4">
            <div>
              <p className="text-md">This function lets you share this Restaurant with a friend.</p>
              <p className="text-md mt-3">Do you want to continue?</p>
            </div>
          </div>
        </div>
      </ModalTemplate> */}
    </div>
  );
}