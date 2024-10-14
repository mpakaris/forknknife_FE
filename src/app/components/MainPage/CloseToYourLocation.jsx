import { useEffect, useState } from "react";
import { getLocationsWithinRadius } from '../../utils/getLocationsWithinRadius';
import { shuffleLocations } from "../../utils/shuffleLocations";
import CarouselBig from './CarouselBig';

export default function CloseToYourLocation({ locations }) {
  const [nearbyLocations, setNearbyLocations] = useState([]);
  const [radius, setRadius] = useState(2000);

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
      <h4 className="text-md font-bold text-white text-center mb-2">
        {nearbyLocations.length} locations in vicinity
      </h4>
      <div className="w-full">
        <CarouselBig options={nearbyLocations} />
      </div>

      {/* Slider for adjusting the radius */}
      <div className="w-full mt-4">
        <label htmlFor="radiusRange" className="text-white text-sm">
          Radius: {radius} meters
        </label>
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
    </div>
  );
}