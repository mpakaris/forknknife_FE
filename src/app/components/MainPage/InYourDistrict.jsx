import { useEffect, useState } from "react";
import { getLocationsInSameDistrict } from '../../utils/getLocationsInSameDistrict';
import { shuffleLocations } from "../../utils/shuffleLocations";
import CarouselBig from './CarouselBig';

export default function InYourDistrict({ locations, userLocation="1082 Budapest, Kisfaludy Utca 28/b" }) {
  const [nearbyLocations, setNearbyLocations] = useState([]);

  useEffect(() => {
    const locationsWithinDistrict = getLocationsInSameDistrict(locations, userLocation)
    
    const shuffledLocations = shuffleLocations(locationsWithinDistrict);
    setNearbyLocations(shuffledLocations); 
  }, [locations, userLocation]); 

  return (
    <div className="flex flex-col items-start bg-black px-3 mt-3 py-3">
      <h4 className="text-md font-bold text-white text-center mb-2">
        {nearbyLocations.length} locations in your district
      </h4>
      <div className="w-full">
        <CarouselBig options={nearbyLocations} />
      </div>

    </div>
  );
}