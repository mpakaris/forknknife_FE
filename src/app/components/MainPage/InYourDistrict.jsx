import { useEffect, useState } from "react";
import { getLocationsInSameDistrict } from '../../utils/getLocationsInSameDistrict';
import { shuffleLocations } from "../../utils/shuffleLocations";
import CarouselBig from './CarouselBig';

export default function InYourDistrict({ locations, onLocationSelect, userLocation = "1082 Budapest, Kisfaludy Utca 28/b" }) {
  const [nearbyLocations, setNearbyLocations] = useState([]);

  useEffect(() => {
    const locationsWithinDistrict = getLocationsInSameDistrict(locations, userLocation);
    const shuffledLocations = shuffleLocations(locationsWithinDistrict);
    setNearbyLocations(shuffledLocations);
  }, [locations, userLocation]);

  return (
    <div className="flex flex-col items-start bg-black px-3 mt-3 py-3">
      <h4 className="text-md font-bold text-white mb-2
        border-b-2 border-gray-200 pb-2 w-full"
      >
        Locations in your district: {nearbyLocations.length}
      </h4>
      <div className="w-full mt-3">
        <CarouselBig options={nearbyLocations} onLocationSelect={onLocationSelect} />
      </div>
    </div>
  );
}