import { useEffect, useState } from "react";
import { getLocationsWithinRadius } from '../../utils/getLocationsWithinRadius';
import { shuffleLocations } from "../../utils/shuffleLocations";
import CarouselBig from './CarouselBig';

export default function CloseToYourLocation({ locations, onLocationSelect }) {
  const [nearbyLocations, setNearbyLocations] = useState([]);
  const [radius, setRadius] = useState(1000);

  useEffect(() => {
    const locationsWithinRadius = getLocationsWithinRadius(
      locations,
      { lat: 47.48958612315468, lng: 19.06244937021245 },
      radius // Dynamic radius value
    );

    const shuffledLocations = shuffleLocations(locationsWithinRadius);
    setNearbyLocations(shuffledLocations); 
  }, [locations, radius]); 

  const handleRadiusChange = (event) => {
    setRadius(event.target.value); 
  };

  return (
    <div className="flex flex-col items-start bg-black px-3 mt-3 py-3">
      <h4 className="text-md font-bold text-white mb-2 first-letter
        border-b-2 border-gray-200 w-full pb-2"
      >
        Locations in vicinity: {nearbyLocations.length} | {radius} meters
      </h4>
      {/* Slider for adjusting the radius */}
      <div className="w-full mb-2 pb-2">
        <input
          id="radiusRange"
          type="range"
          min="100"
          max="3000"
          step="100"
          value={radius}
          onChange={handleRadiusChange}
          className="w-full mt-2"
        />
      </div>
      <div className="w-full">
        <CarouselBig options={nearbyLocations} onLocationSelect={onLocationSelect}/>
      </div>
    </div>
  );
}