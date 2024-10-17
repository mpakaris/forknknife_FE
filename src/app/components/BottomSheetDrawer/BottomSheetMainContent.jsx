import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import BottomSheetReviews from "./BottomSheetReviews";
import BottomSheetWeeklyMenu from "./BottomSheetWeeklyMenu";

// Dynamically load the Map component for client-side rendering
const Map = dynamic(() => import("../Maps/MapTilerModal"), { ssr: false });

const BottomSheetMainContent = ({ selectedLocation, userLocation, }) => {

  return (
    <div className="mt-5">
      {/* Map Component */}
      <div className="reviews mt-4">
        <Map 
          currentLocation={{
            lat: userLocation?.lat,
            lng: userLocation?.lng
          }} 
          destinationLocation={{
            lat: selectedLocation?.lat, 
            lng: selectedLocation?.lng
          }} 
        />
      </div>
    
      {/* Weekly Menu */}
      <div className="weeklyMenu mt-4 px-3">
        <BottomSheetWeeklyMenu menu={selectedLocation.menu}/>
      </div>

      {/* Reviews Section */}
      <div className="reviews mt-4">
        <BottomSheetReviews reviews={selectedLocation.reviews} />
      </div>
    </div>
  );
};

export default BottomSheetMainContent;