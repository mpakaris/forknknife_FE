import { useState } from 'react';
import { FaGlobe, FaHeart, FaMapMarkerAlt, FaPhone, FaRegHeart, FaShareAlt } from 'react-icons/fa';
import ModalTemplate from '../Modal/ModalTemplate';

export default function BottomSheetHeadInfo({ name, address, contact, website, setModalScreen }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleShare = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmModal = () => {
    setModalScreen('invitation_location');
    setShowModal(false);
  };

  return (
    <div className="pills space-y-1">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-800">{name}</h1>
        <div className="flex items-center space-x-3">
          <button onClick={handleShare}>
            <FaShareAlt className="text-teal-800 text-2xl" />
          </button>
          <button onClick={toggleFavorite}>
            {isFavorite ? (
              <FaHeart className="text-red-600 text-2xl" />
            ) : (
              <FaRegHeart className="text-teal-800 text-2xl" />
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <FaMapMarkerAlt className="text-teal-600 mr-2" />
        <span className="text-gray-800">{address}</span>
      </div>

      <div className="flex items-center">
        <FaPhone className="text-teal-600 mr-2" />
        <span className="text-gray-500">{contact}</span>
      </div>

      <div className="flex items-center">
        <FaGlobe className="text-teal-800 mr-2" />
        <a
          href={website}
          className="text-teal-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {website}
        </a>
      </div>

      {/* Modal for confirmation */}
      <ModalTemplate
        show={showModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
      >
        <p className="text-basic">This function lets you share this Restaurant with a friend.</p>
        <p className="text-basic mt-3">Do you want to continue?</p>
      </ModalTemplate>
    </div>
  );
}