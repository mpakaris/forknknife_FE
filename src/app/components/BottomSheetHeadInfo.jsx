import { FaGlobe, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function BottomSheetHeadInfo({name, address, contact, website, rating}) {
 return (
  <div className='pills space-y-1'>
    <h1 className="text-2xl font-bold text-teal-800">{name}</h1>

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
 )
}
