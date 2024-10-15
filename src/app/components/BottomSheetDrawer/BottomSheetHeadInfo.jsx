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

  return (
    <div className="pills space-y-2">
      {/* {JSON.stringify(selectedLocation)} */}
      <div className="flex justify-between items-center my-5 px-3">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{selectedLocation.name}</h1>
        <div className="flex items-center space-x-3">
          <button onClick={handleShare}>
            <FaShareAlt className="text-gray-800 text-2xl" />
          </button>
          <button onClick={toggleFavorite}>
            {isFavorite ? (
              <FaHeart className="text-red-600 text-2xl" />
            ) : (
              <FaRegHeart className="text-gray-800 text-2xl" />
            )}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 text-gray-800 p-4">
        {/* Address Row */}
        <div className="col-span-1 flex justify-center">
          <FaMapMarkerAlt className="text-gray-800 text-2xl" />
        </div>
        <div className="col-span-11">
          <span className="text-gray-800">{selectedLocation.address}</span>
        </div>

        {/* Phone Row */}
        <div className="col-span-1 flex justify-center">
          <FaPhone className="text-gray-800 text-2xl" />
        </div>
        <div className="col-span-11">
          <span className="text-gray-800">{selectedLocation.phone}</span>
        </div>

        {/* Website Row */}
        <div className="col-span-1 flex justify-center">
          <FaGlobe className="text-gray-800 text-2xl" />
        </div>
        <div className="col-span-11">
          <a
            href={selectedLocation.url}
            className="text-gray-800 hover:underline"
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
    </div>
  );
}