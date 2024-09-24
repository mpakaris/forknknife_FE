import { useState } from 'react';
import { FaGlobe, FaHeart, FaMapMarkerAlt, FaPhone, FaRegHeart } from 'react-icons/fa';

export default function BottomSheetHeadInfo({ name, address, contact, website, rating }) {
  // Constant to track if the item is a favorite or not
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // Toggle favorite status on click
  };

  return (
    <div className='pills space-y-1'>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-800">{name}</h1>
        <button onClick={toggleFavorite}>
          {isFavorite ? (
            <FaHeart className="text-red-600 text-2xl" />
          ) : (
            <FaRegHeart className="text-teal-800 text-2xl" />
          )}
        </button>
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
    </div>
  );
}