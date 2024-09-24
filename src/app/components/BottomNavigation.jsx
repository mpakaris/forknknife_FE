import { FaCalendarAlt, FaHome, FaMapMarkedAlt, FaUser, FaUtensils } from 'react-icons/fa';

const BottomNav = ({ setScreen }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-teal-600 shadow z-20">
      <div className="flex justify-around items-center h-20">
        <button onClick={() => setScreen('home')} className="text-center flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
            <FaHome className="h-5 w-5 text-teal-700" />
          </div>
          <span className="block text-xs text-teal-700 font-bold">Home</span>
        </button>
        <button onClick={() => setScreen('search')} className="text-center flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
            <FaCalendarAlt className="h-5 w-5 text-teal-700" />
          </div>
          <span className="block text-xs text-teal-700 font-bold">Meal Plan</span>
        </button>
        
        <button onClick={() => setScreen('map')} className="text-center flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
            <FaMapMarkedAlt className="h-5 w-5 text-teal-700" />
          </div>
          <span className="block text-xs text-teal-700 font-bold">Map</span>
        </button>
        
        <button onClick={() => setScreen('favorites')} className="text-center flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
            <FaUtensils className="h-5 w-5 text-teal-700" />
          </div>
          <span className="block text-xs text-teal-700 font-bold">Favorites</span>
        </button>
        
        <button onClick={() => setScreen('profile')} className="text-center flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
            <FaUser className="h-5 w-5 text-teal-700" />
          </div>
          <span className="block text-xs text-teal-700 font-bold">Profile</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;