 
import { FaHome, FaMapMarkedAlt, FaSearch } from 'react-icons/fa'; // Font Awesome Icons

export default function NavbarSearch({setScreen, currentScreen}) {

  const displayButton = () => {
    if (currentScreen === "map") {
      return (
        <button onClick={() => setScreen('home')} className="text-center flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
            <FaHome className="h-5 w-5 text-teal-700" />
          </div>
        </button>  
      )
    } else {
      return (
        <button onClick={() => setScreen('map')} className="text-center flex flex-col items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
            <FaMapMarkedAlt className="h-5 w-5 text-teal-700" />
          </div>
        </button>    
      )
    }
  }

  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-gray-100">
      <div className="relative flex items-center w-full max-w-md mx-auto">
        <FaSearch className="absolute left-3 text-gray-200" />
        <input
          type="text"
          className="pl-10 pr-4 py-2 w-full mr-3 border border-gray-50 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-600"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center">
        {displayButton()} 
      </div>
    </nav>
  );
}